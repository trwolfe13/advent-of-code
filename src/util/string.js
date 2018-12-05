module.exports = {
  chars: input => input.split(''),
  words: input => input.split(/\s/g),
  lines: input => input.match(/[^\r\n]+/g).map(n => n.trim()),
  replaceAll: (input, search, replace) => {
    let value = input, last = undefined;
    do {
      last = value;
      value = value.replace(search, replace);
    } while (value !== last)
    return value;
  }
}
