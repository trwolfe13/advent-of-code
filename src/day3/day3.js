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

function coordinatesAdjacent(coords1, coords2) {
  const xDiff = Math.abs(coords1[0] - coords2[0]);
  const yDiff = Math.abs(coords1[1] - coords2[1]);
  return (xDiff === 1 || yDiff === 1) && (xDiff < 2 && yDiff < 2);
}

function adjacentCoords(sumSpiral, curIndex) {
  const cell = sumSpiral[curIndex];
  if (!cell) { return []; }
  const previousCoords = sumSpiral.slice(1, curIndex);
  return previousCoords.filter(i => coordinatesAdjacent(i.coords, cell.coords));
}

function sumAdjacent(sumSpiral, curIndex) {
  const cell = sumSpiral[curIndex];
  if (!cell || !cell.coords) { return 0; }
  if (cell.coords[0] === 0 && cell.coords[1] === 0) return 1;

  const adjacent = adjacentCoords(sumSpiral, curIndex);
  return adjacent.reduce((prev, curr) => prev + (curr ? curr.total : 0), 0);
}

function sumSpiral(spiral) {
  const sumSpiral = spiral.map(coords => ({ coords, total: 0 }));
  sumSpiral.forEach((cell, index) => {
    const total = sumAdjacent(sumSpiral, index);
    cell.total = total;
  });
  return sumSpiral;
}

module.exports = {
  Direction,
  nextDirection,
  move,
  spiral,
  coordinatesAdjacent,
  adjacentCoords,
  sumAdjacent,
  sumSpiral,
  part1: function (maxNumber) {
    const coords = spiral(maxNumber)[maxNumber];
    return Math.abs(coords[0]) + Math.abs(coords[1]);
  },
  part2: function (input, cellCount) {
    cellCount = cellCount || 100;
    const genSpiral = spiral(cellCount);
    const summedSpiral = sumSpiral(genSpiral);
    for (let i = 0, len = summedSpiral.length; i < len; i++) {
      if (summedSpiral[i].total > input) {
        return summedSpiral[i].total;
      }
    }
    return -1;
  }
}