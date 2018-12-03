const mfcsam = require('./mfcsam');

module.exports = function (input) {
  const aunts = mfcsam.parse(input);
  return aunts.find(o => mfcsam.isMatch(o, mfcsam.model)).id;
}