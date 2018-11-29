module.exports = {
  chars: input => input.split(''),
  lines: input => input.match(/[^\r\n]+/g).map(n => n.trim())
}
