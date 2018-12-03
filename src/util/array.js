const swapIndex = (a, i1, i2) => {
  const temp = a[i1];
  a[i1] = a[i2];
  a[i2] = temp;
};

const permute = (a, s = a.length, l = []) => {
  if (s === 1) { l.push([...a]); return; }
  for (let i = 0; i < s; i++) {
    permute(a, s - 1, l);
    swapIndex(a, (s % 2 == 1) ? 0 : i, s - 1);
  }
  return l;
}

module.exports = {
  last: a => a[a.length - 1],
  grid: (x, y, v = 0) => {
    const o = [];
    while (x--) {
      let c = y, r = [];
      while (c--) { r.push(v); }
      o.push(r);
    }
    return o;
  },
  swapIndex,
  permute,
  projectReduce: (a, p, c) => a.reduce((last, obj) => {
    const value = p(obj);
    return (!last || c(last.value, value)) ? { value, obj } : last;
  }, undefined)
}
