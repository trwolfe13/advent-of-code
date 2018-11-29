module.exports = {
  grid: (x, y, v = 0) => {
    const o = [];
    while (x--) {
      let c = y, r = [];
      while (c--) { r.push(v); }
      o.push(r);
    }
    return o;
  },
}
