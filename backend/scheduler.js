const { runScan } = require('./scanManager');
const { parseNmapOutput } = require('./resultParser');
const { saveScanResult } = require('./scanManager'); // Ensure saveScanResult is correctly imported

cron.schedule('* * * * *', async () => {
  const scans = await Scan.find();
  for (const scan of scans) {
    const now = new Date();
    if (shouldRunScan(scan, now)) {
      try {
        const output = await runScan(scan.target);
        const result = parseNmapOutput(output);
        await saveScanResult(scan.user, result);
        if (result.vulnerabilities.length > 0) {
          const user = await User.findById(scan.user);
          sendNotification(user.notificationEmail, 'Critical Vulnerability Found', JSON.stringify(result, null, 2));
        }
      } catch (error) {
        console.error('Error running scan:', error);
      }
    }
  }
});
