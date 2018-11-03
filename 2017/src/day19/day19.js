const Direction = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 }
const VTRAVEL = '|', HTRAVEL = '-', CHANGED = '+';

const parse = i => i.match(/[^\r\n]+/g).map(l => l.split(''));
const char = (g, p) => g[p[1]][p[0]];
const positionValid = (g, p) => g[p[1]] && char(g, p);
const move = (pos, dir) => {
  switch (dir) {
    case Direction.UP: return [pos[0], pos[1] - 1];
    case Direction.DOWN: return [pos[0], pos[1] + 1];
    case Direction.LEFT: return [pos[0] - 1, pos[1]];
    case Direction.RIGHT: return [pos[0] + 1, pos[1]];
    default: throw new Error(`Unrecognised direction: ${dir}`);
  }
};

function findStart(graph) {
  for (let x = 0; x < graph[0].length; x++) {
    if (graph[0][x] === VTRAVEL) { return [x, 0]; }
  }
}

function findDirection(graph, position, direction) {
  if (direction === Direction.UP || direction === Direction.DOWN) {
    const lChar = char(graph, move(position, Direction.LEFT));
    if (lChar === HTRAVEL ||lChar.match(/[A-Z]/)) {
      return Direction.LEFT;
    } else {
      return Direction.RIGHT;
    }
  } else {
    const uChar = char(graph, move(position, Direction.UP))
    if (uChar === VTRAVEL || uChar.match(/[A-Z]/)) {
      return Direction.UP;
    } else {
      return Direction.DOWN;
    }
  }
}

function walk(graph) {
  let position = findStart(graph), direction = Direction.DOWN, buffer = '';
  let count = 0;
  while (positionValid(graph, position)) {
    let c = char(graph, position);
    switch (c) {
      case VTRAVEL: case HTRAVEL: break;
      case CHANGED: direction = findDirection(graph, position, direction); break;
      case ' ': return { buffer: buffer.trim(), count };
      default: buffer += c; break;
    }
    position = move(position, direction);
    count++;
  }
  return { buffer: buffer.trim(), count };
}

module.exports = {
  walk,
  findStart,
  parse,
  part1: function (input) {
    const graph = parse(input);
    const path = walk(graph);
    return path.buffer;
  },
  part2: function (input) {
    const graph = parse(input);
    const path = walk(graph);
    return path.count;
  }
}