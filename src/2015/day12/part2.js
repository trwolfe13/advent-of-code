const sumReduce = n => n.reduce((p, c) => p + sum(c), 0);
const sum = o => {
  if (typeof o === 'number') { return o; }
  else if (typeof o === 'string') { return 0; }
  else if (Array.isArray(o)) { return sumReduce(o); }
  else { 
    const vals = Object.keys(o).map(k => o[k]);
    return vals.includes('red') ? 0 : sumReduce(vals);
  }
};

module.exports = input => sum(JSON.parse(input));