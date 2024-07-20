// scanManager.js
const { exec } = require('child_process');
const path = require('path');

// Define the path to the Nmap executable
const nmapPath = path.join('C:', 'Program Files (x86)', 'Nmap', 'nmap.exe');

function runScan(target) {
  return new Promise((resolve, reject) => {
    exec(`"${nmapPath}" -A -sV -O --script vuln ${target}`, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      if (stderr) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
}

module.exports = { runScan };
