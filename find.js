const fs = require('fs');
const path = require('path');

const searchPath = path.join(__dirname, 'routes');
console.log(`Searching in: ${searchPath}`);

fs.readdirSync(searchPath).forEach(file => {
  console.log(`Found: ${file}`);
});