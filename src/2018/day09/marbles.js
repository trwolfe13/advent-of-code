const array = require('../../util/array');
const _ = require('lodash');

const logMarbles = (state, x) => {
  let buffer = `[${x}]`;
  const visited = [];
  let current = 0;
  while (!visited.includes(current)) {
    visited.push(current);
    const marble = state.marbles[current];
    if (current === state.current) {
      buffer += ` (${marble.value})`;
    } else {
      buffer += ` ${marble.value}`;
    }
    current = marble.next;
  }
  console.log(buffer);
};

const winner = (players, lastMarble) => {
  const state = {
    players: array.build(players),
    marbles: [
      { value: 0, previous: 0, next: 0 }
    ],
    current: 0,
    last: lastMarble
  };

  for (let x = 1; x <= state.last; x++) {
    const player = ((x - 1) % state.players.length);

    if (x % 23 === 0) {
      state.players[player] += x;
      for (let y = 1; y <= 7; y++) {
        state.current = state.marbles[state.current].previous;
      }
      const current = state.marbles[state.current];
      state.players[player] += current.value;
      state.marbles[current.previous].next = current.next;
      state.marbles[current.next].previous = current.previous;
      state.current = current.next;
    } else {
      const current = state.marbles[state.current];
      const next1 = state.marbles[current.next];
      const next2 = state.marbles[next1.next];
      const newMarble = state.marbles.push({ value: x, previous: current.next, next: next1.next }) - 1;
      next1.next = newMarble; next2.previous = newMarble;
      state.current = newMarble;
    }
  }
  return _.max(state.players);
}

module.exports = {
  winner
};
