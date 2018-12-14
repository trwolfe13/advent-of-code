const recipes = require('./recipes');
const array = require('../../util/array');

module.exports = function (input) {
  const state = { current: [0, 1], scores: [3, 7] }
  // let count = 1;
  const last = Number(input[input.length - 1]);
  const nextLast = Number(input[input.length - 2]);
  while (true) {
    if (state.scores[state.scores.length - 1] === last && state.scores[state.scores.length - 2] === nextLast) {
      if (state.scores.join('').indexOf(input) !== -1) { break; }
    }
    recipes.tick(state);
    // `console.log(count);`
    // count++;
  }
  return state.scores.join('').indexOf(input);
}