const express = require('express');
const { runScan } = require('./scanManager');
const { parseNmapOutput } = require('./resultParser');
const User = require('./userModel');
const Scan = require('./scanModel');
const { authenticate } = require('./authMiddleware'); // Import your authentication middleware

const router = express.Router();

// Trigger a Manual Scan
router.post('/trigger', authenticate, async (req, res) => {
  try {
    const { target } = req.body;
    const output = await runScan(target);
    const result = parseNmapOutput(output);

    // Save scan results to database
    const scan = new Scan({
      user: req.userId,  // Assuming req.userId is set by authentication middleware
      target,
      results: result
    });
    await scan.save();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Scan Results by ID
router.get('/result/:id', authenticate, async (req, res) => {
  try {
    const scanId = req.params.id;
    const scan = await Scan.findById(scanId).exec();
    
    if (!scan) {
      return res.status(404).json({ error: 'Scan result not found' });
    }

    // Optionally, check if the user is authorized to view this scan result
    if (scan.user.toString() !== req.userId) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    res.json(scan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
