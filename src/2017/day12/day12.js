module.exports = {
  part1: function (input) {
    const z = [];
    const graph = input.match(/[^\r\n]+/g).map(n => n.substring(n.indexOf('>') + 2).trim().split(', ').map(Number));
    graph.forEach((c, n) => {
      if (!z.includes(n) && (n === 0 || c.includes(0) || c.filter(x => z.includes(x)).length > 0)) {
        z.push(n, ...c.filter(x => !c.includes(x)));
      }
    });
    console.log(z);
    return z.length;
  },
  part2: function (input) {
    return 0;
  }
}