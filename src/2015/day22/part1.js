const _ = require('lodash');
const rpg = require('./rpg');

module.exports = function (input) {
  const player = { hp: 50, armor: 0, mana: 500 };
  const boss = { hp: 51, damage: 9 };

  // const player = { hp: 10, armor: 0, mana: 250 };
  // const boss = { hp: 14, damage: 8 };

  const perms = rpg.allSpellPerms(player, boss, 10);
  // console.log(perms.map(p => p.map(s => s.name)));
  const results = perms.map(p => rpg.result(p, player, boss)).filter(r => r.win);

  return _.min(results.map(r => r.cost));
}