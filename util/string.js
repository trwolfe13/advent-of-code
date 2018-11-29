module.exports = {
  lines: input => input.match(/[^\r\n]+/g).map(n => n.trim())
}
