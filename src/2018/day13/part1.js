const carts = require('./carts');

module.exports = function (input) {
  const state = carts.parse(input);
  while (!state.collisions.length) {
    carts.tick(state);
  }
  const c = state.collisions[0].pos;
  return `${c[0]},${c[1]}`;
}