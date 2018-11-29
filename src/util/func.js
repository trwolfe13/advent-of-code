module.exports = {
  chain: (input, ...funcs) => funcs.reduce((p, c) => c.apply(null, p), input)
}
