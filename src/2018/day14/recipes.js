
const nextRecipes = state => {
  const sum = state.scores[state.current[0]] + state.scores[state.current[1]];
  return sum > 9 ? [Math.trunc(sum / 10), sum % 10] : [sum];
}

const moveForward = state => {
  for (let x = 0; x < state.current.length; x++) {
    const f = 1 + state.scores[state.current[x]];
    state.current[x] = (state.current[x] + f) % state.scores.length;
  }
}

const tick = state => {
  const recipes = nextRecipes(state)
  state.scores.push(...recipes);
  moveForward(state);
  return recipes;
}

const writeScores = state => {
  let buffer = '';
  for (let x = 0; x < state.scores.length; x++) {
    buffer += ' ';
    buffer += x === state.current[0] ? '(' : x === state.current[1] ? '[' : ' ';
    buffer += state.scores[x];
    buffer += x === state.current[0] ? ')' : x === state.current[1] ? ']' : ' ';
  }
  console.log(buffer);
}

module.exports = {
  nextRecipes,
  moveForward,
  tick,
  writeScores
}