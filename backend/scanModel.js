// scanModel.js

const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  target: { type: String, required: true },
  results: { type: Object, required: true }, // Adjust based on the structure of your scan results
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scan', scanSchema);
