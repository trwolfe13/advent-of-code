
const nextRecipes = state => state.current.map(c => state.scores[c]).reduce((p, c) => p + c, 0).toString().split('').map(Number);

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