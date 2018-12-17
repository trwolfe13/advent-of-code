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
  product: a => !a.length ? 0 : a.reduce((p, c) => p * c, 1),
  build: (n, d = 0) => {
    const o = [];
    for (let x = 0; x < n; x++) { o.push(d); }
    return o;
  },
  grid: (x, y, v = 0) => {
    const o = [];
    while (y--) {
      let c = x, r = [];
      while (c--) { r.push(v); }
      o.push(r);
    }
    return o;
  },
  neighbours: (grid, x, y) => [
    (grid[y - 1] || [])[x - 1],
    (grid[y - 1] || [])[x],
    (grid[y - 1] || [])[x + 1],

    (grid[y] || [])[x - 1],
    (grid[y] || [])[x + 1],

    (grid[y + 1] || [])[x - 1],
    (grid[y + 1] || [])[x],
    (grid[y + 1] || [])[x + 1]
  ],
  squareSum: (grid, x, y, size) => {
    let total = 0;
    for (let xi = x; xi < x + size; xi++) {
      for (let yi = y; yi < y + size; yi++) {
        total += grid[yi][xi];
      }
    }
    return total;
  },
  swapIndex,
  permute,
  projectReduce: (a, p, c) => a.reduce((last, obj) => {
    const value = p(obj);
    return (!last || c(last.value, value)) ? { value, obj } : last;
  }, undefined),
  drawGrid: (grid, x1 = 0, x2 = grid[0].length - 1, y1 = 0, y2 = grid.length - 1) => {
    let buffer = '';
    for (let y = y1; y <= y2; y++) {
      for (let x = x1; x <= x2; x++) {
        buffer += grid[y][x];
      }
      buffer += '\n';
    }
    console.log(buffer);
    return grid;
  }
}
