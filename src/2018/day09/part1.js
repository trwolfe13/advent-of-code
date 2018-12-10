const _ = require('lodash');
const array = require('../../util/array');

module.exports = function (input) {
  const state = {
    players: array.build(426),
    marbles: [0],
    current: 0,
    last: 72058
  };

  for (let x = 1; x <= state.last; x++) {
    const player = ((x - 1) % state.players.length);
    if (x % 23 === 0) {
      state.players[player] += x;
      state.current -= 7;
      if (state.current < 0) { state.current += state.marbles.length; }
      const marble = state.marbles.splice(state.current, 1)[0];
      state.players[player] += marble;
    } else {
      state.current += 2;
      if (state.current > state.marbles.length) {
        state.current = 1;
      }
      state.marbles.splice(state.current, 0, x);
    }
    // console.log(JSON.stringify(state.marbles));
  }
  return _.max(state.players);
}