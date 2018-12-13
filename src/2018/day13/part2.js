const carts = require('./carts');

module.exports = function (input) {
  const state = carts.parse(input);

  // for (let x = 0; x < 11; x++) {
  //   carts.drawState(state);
  //   console.log(state.carts);
  //   carts.tick(state);
  // }

  while (state.carts.length > 1) {
    carts.tick(state, true); 
  }
  const c = state.carts[0].pos;
  return `${c[0]},${c[1]}`;
}