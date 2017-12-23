const parse = i => i.match(/[^\r\n]+/g).map(line => line.split('').map(c => c === '#'));

const Direction = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };

const turnRight = d => {
  switch (d) {
    case Direction.UP: return Direction.RIGHT;
    case Direction.RIGHT: return Direction.DOWN;
    case Direction.DOWN: return Direction.LEFT;
    case Direction.LEFT: return Direction.UP;
  }
}

const turnLeft = d => {
  switch (d) {
    case Direction.UP: return Direction.LEFT;
    case Direction.RIGHT: return Direction.UP;
    case Direction.DOWN: return Direction.RIGHT;
    case Direction.LEFT: return Direction.DOWN;
  }
}

const move = (pos, dir) => {
  switch (dir) {
    case Direction.UP: return [pos[0], pos[1] - 1];
    case Direction.DOWN: return [pos[0], pos[1] + 1];
    case Direction.LEFT: return [pos[0] - 1, pos[1]];
    case Direction.RIGHT: return [pos[0] + 1, pos[1]];
  }
};

function infiniteGrid (start) {
  const bGrid = parse(start);

  const merge = arr => Object.assign({}, ...arr);
  let grid = merge(bGrid.map((r, i) => ({ [i]: merge(r.map((c, i) => ({ [i]: c }))) })));

  const create = (x, y) => {
    if (!grid[y]) { grid[y] = {}; }
    if (!grid[y][x]) { grid[y][x] = false; }
  }

  return {
    get: function ([x, y]) {
      create(x, y);
      return grid[y][x];
    },
    flip: function ([x, y]) {
      create(x, y);
      grid[y][x] = !grid[y][x];
    }
  }
}


module.exports = {
  part1: function (input, start = 12, times = 10000) {
    const grid = infiniteGrid(input);
    let pos = [start, start], dir = Direction.UP, count = 0;

    for (let n = 0; n < times; n++) {
      const cur = grid.get(pos);
      dir = cur ? turnRight(dir) : turnLeft(dir);
      grid.flip(pos);
      pos = move(pos, dir);
      if (!cur) { count++; }
    }

    return count;
  },
  part2: function (input) {
    return 0;
  }
}