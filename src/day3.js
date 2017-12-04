const _ = require('lodash');

const Direction = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3,
};

function nextDirection(direction) {
  switch (direction) {
    case Direction.UP: return Direction.LEFT;
    case Direction.RIGHT: return Direction.UP;
    case Direction.DOWN: return Direction.RIGHT;
    case Direction.LEFT: return Direction.DOWN;
  }
}

function move(position, direction) {
  if (!position) { return [0, 0]; }
  switch (direction) {
    case Direction.UP: return [position[0], position[1] + 1];
    case Direction.RIGHT: return [position[0] + 1, position[1]];
    case Direction.DOWN: return [position[0], position[1] - 1];
    case Direction.LEFT: return [position[0] - 1, position[1]];
  }
}

function spiral(maxNumber) {
  const spiralArray = [undefined];
  let previousPosition;
  let direction = Direction.DOWN;
  let sidePosition = 0;
  let sideLength = 1;
  let side = 0;

  for (i = 1; i <= maxNumber; i++) {
    const position = move(previousPosition, direction);
    spiralArray.push(position);
    previousPosition = position;

    sidePosition++;
    if (sidePosition >= sideLength) {
      direction = nextDirection(direction);
      side++;
      sidePosition = 0;
      sideLength = Math.ceil(side / 2);
    }
  }
  return spiralArray;
}

module.exports = {
  Direction,
  nextDirection,
  move,
  spiral,
  part1: function (maxNumber) {
    const coords = spiral(maxNumber)[maxNumber];
    return Math.abs(coords[0]) + Math.abs(coords[1]);
  },
  part2: function (sequence) {
    // TODO: Solve problem.
    return 0;
  }
}