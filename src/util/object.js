const values = o => Object.keys(o).map(k => o[k]);

module.exports = {
  values,
  forEachKey: (o, fn) => values(o).forEach(fn)
}