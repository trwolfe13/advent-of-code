const _ = require('lodash');
const rpg = require('./rpg');

module.exports = function (input) {
  const player = { hp: 50, armor: 0, mana: 500 };
  const boss = { hp: 51, damage: 9 };

  const perms = rpg.allSpellPerms(player, boss, 10);
  const results = perms.map(p => rpg.result(p, player, boss)).filter(r => r.win);

  return _.min(results.map(r => r.cost));
}