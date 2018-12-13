const string = require('../../util/string');

const UP = '^', DOWN = 'v', LEFT = '<', RIGHT = '>';
const HTRACK = '-', VTRACK = '|', INTERSECTION = '+', CORNER1 = '/', CORNER2 = '\\';

const CORNERMAP1 = { [UP]: RIGHT, [RIGHT]: UP, [DOWN]: LEFT, [LEFT]: DOWN };
const CORNERMAP2 = { [UP]: LEFT, [RIGHT]: DOWN, [DOWN]: RIGHT, [LEFT]: UP };

const parse = input => {
  const track = string.grid(input);
  const carts = [];
  track.forEach((row, y) => {
    row.forEach((column, x) => {
      if (column === DOWN || column === UP || column === LEFT || column === RIGHT) {
        carts.push({ id: carts.length, dir: column, last: RIGHT, pos: [x, y] });
        track[y][x] = column === LEFT || column === RIGHT ? HTRACK : VTRACK;
      }
    });
  });
  return { track, carts, collisions: [] };
}

const move = cart => {
  switch (cart.dir) {
    case UP: cart.pos[1]--; break;
    case DOWN: cart.pos[1]++; break;
    case LEFT: cart.pos[0]--; break;
    case RIGHT: cart.pos[0]++; break;
  }
}

const adjustDirection = (cart, track) => {
  const piece = track[cart.pos[1]][cart.pos[0]];
  switch (piece) {
    case CORNER1: cart.dir = CORNERMAP1[cart.dir]; break;
    case CORNER2: cart.dir = CORNERMAP2[cart.dir]; break;
    case INTERSECTION: {
      switch (cart.last) {
        case LEFT: cart.last = UP; break;
        case UP:
          cart.last = RIGHT;
          switch (cart.dir) {
            case UP: cart.dir = RIGHT; break;
            case RIGHT: cart.dir = DOWN; break;
            case DOWN: cart.dir = LEFT; break;
            case LEFT: cart.dir = UP; break;
          }
          break;
        case RIGHT:
          cart.last = LEFT;
          switch (cart.dir) {
            case UP: cart.dir = LEFT; break;
            case RIGHT: cart.dir = UP; break;
            case DOWN: cart.dir = RIGHT; break;
            case LEFT: cart.dir = DOWN; break;
          }
          break;
      }
    }
  }
}

const tick = state => {
  state.carts.forEach(cart => {
    move(cart);
    adjustDirection(cart, state.track);
    state.carts.forEach((cart, i) => {
      const collision = state.carts.find(c => c.id !== cart.id && c.pos[0] === cart.pos[0] && c.pos[1] === cart.pos[1]);
      if (collision) {
        state.collisions.push({ cart1: cart.id, cart2: collision.id, pos: [...cart.pos] })
      }
    });
  });
};

const drawState = state => {
  let buffer = '\n';
  state.track.forEach((row, y) => {
    row.forEach((column, x) => {
      const cart = state.carts.find(c => c.pos[0] === x && c.pos[1] === y);
      buffer += cart ? cart.dir : column;
    });
    buffer += '\n';
  });
  console.log(buffer);
}

module.exports = function (input) {
  const state = parse(input);

  // for (let x = 0; x < 30; x++) {
  //   drawState(state);
  //   tick(state);
  // }

  while (!state.collisions.length) {
    tick(state);
  }
  const c = state.collisions[0].pos;
  return `${c[0]},${c[1]}`;
}