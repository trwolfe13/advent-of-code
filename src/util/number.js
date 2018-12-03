const sumParts = (t, p, c = [], o = []) => {
  if (t <= 0 || p <= 0) {
    o.push([...c]);
    c.splice(0, c.length);
  } else {
    for (let x = 0; x <= t; x++) {
      c.push(x);
      sumParts(t - x, p - 1, c, o);
    }
  }
  return o;
}

module.exports = {
  sumParts
}
