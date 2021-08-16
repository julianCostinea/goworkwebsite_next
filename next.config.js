var fs = require('fs');

module.exports = {
  reactStrictMode: true,
  env: {
    rawJsFromFile: fs.readFileSync('./rawJsFromFile.js').toString()
  }
}
