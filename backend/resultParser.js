// resultParser.js
function parseNmapOutput(output) {
  const results = {
    openPorts: [],
    services: [],
    os: null,
    vulnerabilities: []
  };

  // Parse open ports
  const portLines = output.match(/^(\d+\/\w+)\s+(\w+)\s+(\S+)/gm);
  if (portLines) {
    portLines.forEach(line => {
      const [_, port, protocol, service] = line.split(/\s+/);
      results.openPorts.push({ port, protocol, service });
    });
  }

  // Parse OS information
  const osMatch = output.match(/OS details: (.*)/);
  if (osMatch) {
    results.os = osMatch[1];
  }

  // Parse vulnerabilities
  const vulnMatch = output.match(/Nmap scan report for .*[\s\S]*?(?=Nmap scan report|Nmap done:|$)/g);
  if (vulnMatch) {
    vulnMatch.forEach(vuln => {
      results.vulnerabilities.push(vuln.trim());
    });
  }

  return results;
}

module.exports = { parseNmapOutput };
