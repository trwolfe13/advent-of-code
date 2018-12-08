countNode = (stream, state = { cursor: 0, total: 0 }) => {
  const children = stream[state.cursor++];
  const metadata = stream[state.cursor++];
  for (let x = 0; x < children; x++) { countNode(stream, state); }
  for (let x = 0; x < metadata; x++) { state.total += stream[state.cursor++]; }
  return state;
}

module.exports = function (input) {
  const stream = input.split(' ').map(Number);
  return countNode(stream).total;
}