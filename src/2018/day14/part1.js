const recipes = require('./recipes');

module.exports = function (input) {
  const count = Number(input);
  const state = { current: [0, 1], scores: [3, 7] }
  while (state.scores.length < count + 10) {
    recipes.tick(state);
  }
  return state.scores.slice(count, count + 10).join('');
}