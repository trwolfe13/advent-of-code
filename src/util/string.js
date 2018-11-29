module.exports = {
  chars: input => input.split(''),
  words: input => input.split(/\s/g),
  lines: input => input.match(/[^\r\n]+/g).map(n => n.trim())
}
