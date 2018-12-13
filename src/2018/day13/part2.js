const carts = require('./carts');

module.exports = function (input) {
  const state = carts.parse(input);
  while (state.carts.length > 1) {
    // carts.drawState(state);
    carts.tick(state, true);
    
  }
  carts.drawState(state);
  const c = state.carts[0].pos;
  return `${c[0]},${c[1]}`;
}