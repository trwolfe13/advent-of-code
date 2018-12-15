const combat = require('./combat');

module.exports = function (input) {
  const state = combat.parse(input);

  let rounds = 0;
  while (!combat.winner(state)) {
    combat.round(state);
    rounds++;
  }

  return rounds - 1;
}