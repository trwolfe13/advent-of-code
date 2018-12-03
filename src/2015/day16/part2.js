const mfcsam = require('./mfcsam');

const checks = {
  cats: (s, m) => s > m,
  trees: (s, m) => s > m,
  pomeranians: (s, m) => s < m,
  goldfish: (s, m) => s < m,
};

module.exports = function (input) {
  const aunts = mfcsam.parse(input);
  return aunts.find(o => mfcsam.isMatch(o, mfcsam.model, checks)).id;
}