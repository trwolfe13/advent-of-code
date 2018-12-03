const sumParts = (t, p, c = [], o = []) => {
  if (p === 1) {
    o.push([...c, t]);
  } else {
    for (let x = 0; x <= t; x++) {
      sumParts(t - x, p - 1, [...c, x], o);
    }
  }
  return o;
}

module.exports = {
  sumParts
}
