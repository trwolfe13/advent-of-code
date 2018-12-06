const rpg = require('./rpg');

module.exports = function (input) {
  // const battle = {
  //   effects: [],
  //   boss: ,
  //   player: 
  // };

  const player = { hp: 50, armor: 0, mana: 500 };
  const boss = { hp: 51, damage: 9 };

  rpg.allSpellPerms(player, boss, player.mana, 3);

  return undefined;
}