const fs = require('fs');
const path = require('path');

module.exports = {
  readString: (...file) => fs.readFileSync(path.join(...file)).toString()
}
