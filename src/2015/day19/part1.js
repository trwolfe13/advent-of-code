const fabrication = require('./fabrication');

module.exports = function (input) {
  const data = fabrication.parse(input)
  return fabrication.perms(data).length;
}
