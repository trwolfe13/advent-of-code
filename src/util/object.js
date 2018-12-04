module.exports = {
  forEachKey: (o, fn) => Object.keys(o).map(k => o[k]).forEach(fn)
}