const _ = require('lodash');
const rpg = require('./rpg');

module.exports = function (input) {
  const player = { hp: 50, armor: 0, mana: 500 };
  const boss = { hp: 51, damage: 9 };
  const perms = rpg.allSpellPerms(player, boss, player.mana, 3);
  const results = perms.map(rpg.result).filter(r => r.win);
  
  return _.min(results.map(r => r.cost));
}