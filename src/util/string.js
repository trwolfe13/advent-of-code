const chars = input => input.split('');
const lines = (input, trim = true) => input.match(/[^\r\n]+/g).map(n => trim ? n.trim() : n);

module.exports = {
  chars,
  lines,
  words: input => input.split(/\s+/g),
  grid: input => lines(input, false).map(chars),
  replaceAll: (input, search, replace) => {
    let value = input, last = undefined;
    do {
      last = value;
      value = value.replace(search, replace);
    } while (value !== last)
    return value;
  },
  allMatches: (input, regexPattern, flags) => {
    const regex = new RegExp(regexPattern, (flags || '') + 'g');
    const matches = [];
    let match;
    while (match = regex.exec(input)) { matches.push(match); }
    return matches;
  }
}
