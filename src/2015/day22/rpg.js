const _ = require('lodash');

const spells = [
  { name: 'Magic Missile', duration: 1, cost: 53, cast: (a, d) => d.hp -= 4, each: (a, d) => { }, end: (a, d) => { } },
  { name: 'Drain', duration: 1, cost: 73, cast: (a, d) => { d.hp -= 2; a.hp += 2; }, each: (a, d) => { }, end: (a, d) => { } },
  { name: 'Shield', duration: 6, cost: 113, cast: (a, d) => a.armor += 7, each: (a, d) => { }, end: (a, d) => a.armor -= 7 },
  { name: 'Poison', duration: 6, cost: 173, cast: (a, d) => { }, each: (a, d) => d.hp -= 3, end: (a, d) => { } },
  { name: 'Recharge', duration: 5, cost: 229, cast: (a, d) => { }, each: (a, d) => a.mana += 101, end: (a, d) => { } }
];

processEffects = (effects, player, boss) => {
  effects.forEach(e => {
    e.each(player, boss);
    e.timer--;
  });
  for (let x = effects.length - 1; x >= 0; x--) {
    if (effects[x].timer <= 0) {
      effects[x].end(player, boss);
      effects.splice(x, 1);
    }
  }
}

const castSpell = (player, spell, boss) => {
  spell.cast(player, boss);
  player.mana -= spell.cost;
  return {
    name: spell.name,
    timer: spell.duration,
    each: spell.each,
    end: spell.end
  };
}

const allSpellPerms = (player, boss, max, current = [], effects = [], perms = []) => {
  if (current.length === max) {
    perms.push(current);
    return perms;
  }
  processEffects(effects, player, boss);
  processEffects(effects, player, boss);
  const available = availableSpells(spells, player, effects);

  if (available.length === 0) {
    perms.push(current);
    return;
  }

  available.forEach(spell => {
    const tPlayer = { ...player }, tBoss = { ...boss };
    const effect = castSpell(tPlayer, spell, tBoss);
    const spellList = [...current, spell];
    const newEffects = _.cloneDeep([...effects, effect]);
    allSpellPerms(tPlayer, tBoss, max, spellList, newEffects, perms);
  });
  return perms;
}

const availableSpells = (spells, player, effects) => {
  const eNames = effects.map(e => e.name);
  return spells.filter(s => s.cost <= player.mana && !eNames.includes(s.name))
};

result = (spells, playerModel, bossModel, hardMode = false) => {
  // TODO: Implement this method.
  const effects = [];
  const cast = [];
  const player = { ...playerModel };
  const boss = { ...bossModel };

  let turn = 0;
  for (turn = 0; turn < spells.length; turn++) {
    // Effects happen. 
    processEffects(effects, player, boss);

    // Player's turn.
    if (hardMode) {
      player.hp--;
      if (player.hp <= 0) { break; }
    }
    const spell = spells[turn];
    effects.push(castSpell(player, spell, boss));
    cast.push(spell);

    if (boss.hp <= 0) { break; }

    // Effects happen. 
    processEffects(effects, player, boss);
    if (boss.hp <= 0) { break; }

    // Boss's turn.
    player.hp -= Math.max(1, boss.damage - player.armor);

    if (player.hp <= 0) { break; }
  }

  const win = boss.hp <= 0 && player.hp > 0;
  const cost = _.sum(cast.map(s => s.cost));

  // console.log('Win:', win, 'Cast:', cast.map(c => c.name), 'Cost: ', cost);

  return { win, cost };
}

module.exports = {
  spells,
  allSpellPerms,
  result
};
