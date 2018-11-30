const sum = o => typeof o === 'string' ? 0 : typeof o === 'number' ? o : Object.keys(o).map(k => o[k]).reduce((p, c) => p + sum(c), 0);

module.exports = input => sum(JSON.parse(input));