const parse = i => i.match(/[^\r\n]+/g).map(l => l.split(''));

const VTRAVEL = '|';
const HTRAVEL = '-';
const CHANGED = '+';

function findStart(graph) {
  for (let x = 0; x < graph[0].length; x++) {
   if (graph[0][x] === VTRAVEL) {
     return [x, 0];
   }
  }
  // TODO: Search other sides too?
}

const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4
}

function walk(graph, start) {
  const direction = Direction.DOWN;
  const position = start;
  
  while (true) {
    switch(graph[position[0]][position[1]) {
       case VTRAVEL:
       case HTRAVEL:
       case CHANGED:
    }
  }
}

module.exports = {
  part1: function(input) {
    const graph = parse(input);
    const start = findStart(graph);
    const path = walk(graph);
 	return path;
  },
  part2: function(input) {
    return 0;
  }
}