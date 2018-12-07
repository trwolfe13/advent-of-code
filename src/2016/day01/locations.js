const points = require('../../util/points');

const turn = (s, d) => {
  switch (s.dir) {
    case 'N': s.dir = d === 'L' ? 'W' : 'E'; break;
    case 'E': s.dir = d === 'L' ? 'N' : 'S'; break;
    case 'W': s.dir = d === 'L' ? 'S' : 'N'; break;
    case 'S': s.dir = d === 'L' ? 'E' : 'W'; break;
  }
};

const move = s => {
  switch (s.dir) {
    case 'N': { s.pos[1]--; s.vis.push([...s.pos]); break; }
    case 'S': { s.pos[1]++; s.vis.push([...s.pos]); break; }
    case 'W': { s.pos[0]--; s.vis.push([...s.pos]); break; }
    case 'E': { s.pos[0]++; s.vis.push([...s.pos]); break; }
  }
};

walk = (input, santa) => {
  santa.vis = santa.vis || [];
  input.split(', ').forEach(step => {
    turn(santa, step[0]);
    for (let x = 0; x < Number(step.slice(1)); x++) { move(santa); }
  });
}

module.exports = {
  walk
}