const _ = require('lodash');
const points = require('../../util/points');
const string = require('../../util/string');

const WALL = '#';
const GOBLIN = 'G', ELF = 'E';

const parse = input => {
  const cave = string.grid(input);
  const creatures = [];
  cave.forEach((row, y) => {
    row.forEach((type, x) => {
      if (column === GOBLIN || column === ELF) {
        creatures.push({ id: creatures.length, type, hp: 200, atk: 3, x, y });
        track[y][x] = '.';
      }
    });
  });
  return { cave, creatures };
}

const creatureInitiative = state => readingOrder(state.creatures.filter(c => c.hp > 0));
const readingOrder = creatures => _.sortBy(creatures, c => c.x, c => c.y);
const round = state => creatureInitiative(state).forEach(creature => turn(state, creature));

const turn = (state, creature) => {
  const targets = availableTargets(state, creature);
  const target = closestTarget(state, creature, targets);
  if (target) {
    move(creature, target.next);
    attack(creature, target.creature);
  }
}

const availableTargets = (state, creature) => state.creatures.filter(c => c.type !== creature.type && c.hp > 0);

const closestTarget = (state, creature, targets) => {
  const inRange = targetsInRange(creature, targets);
  if (inRange.length > 0) { return inRange[0]; }

  const paths = targets.map(target => ({ target, path: shortestPath(state, creature, target) }));
  const shortest = _.min(paths.map(p => p.path.length));
  const shortestPaths = paths.filter(p => p.path.length === shortest);
  return readingOrder(shortestPaths.map(p => p.target));
};

const targetsInRange = (creature, targets) => readingOrder(targets.filter(t => points.manhattan(t, creature) === 1));

const shortestPath = (state, creature, target) => {

}

const move = (creature, p) => creature.x = p.x; creature.y = p.y;
const attack = (state, creature) => {
  let targets = availableTargets(state, creature);
  targets = targetsInRange(creature, targets);
  if (targets.length === 0) { return; }

  const lowestHp = _.min(targets.map(t => t.hp));
  const target = targets.filter(t => t.hp === lowestHp)[0];
  target.hp -= creature.atk;
}

const winner = state => {
  const elfHp = state.elves.sum(e => e.hp > 0);
  const gobHp = state.goblines.sum(g => g.hp > 0);

  if (gobHp > 0 && elfHp <= 0) { return GOBLIN; }
  if (elfHp > 0 && gobHp <= 0) { return ELF; }
  return undefined;
}

module.exports = {
  parse,
  round,
  GOBLIN,
  ELF,
  winner
}