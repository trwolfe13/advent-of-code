const _ = require('lodash');

const spells = [
  { name: 'Magic Missile', duration: 1, cost: 53, cast: (a, d) => d.hp -= 4, each: (a, d) => { }, end: (a, d) => { } },
  { name: 'Drain', duration: 1, cost: 73, cast: (a, d) => { d.hp -= 2; a.hp += 2; }, each: (a, d) => { }, end: (a, d) => { } },
  { name: 'Shield', duration: 6, cost: 113, cast: (a, d) => a.armor += 7, each: (a, d) => { }, end: (a, d) => a.armor -= 7 },
  { name: 'Poison', duration: 6, cost: 173, cast: (a, d) => { }, each: (a, d) => d.hp -= 3, end: (a, d) => { } },
  { name: 'Recharge', duration: 5, cost: 229, cast: (a, d) => { }, each: (a, d) => d.mana += 101, end: (a, d) => { } }
];

const spellEffect = spell => ({
  name: spell.name,
  timer: spell.duration,
  each: spell.each,
  end: spell.end
});

const allSpellPerms = (player, boss, mana, max, current = [], effects = [], perms = []) => {
  if (current.length === max) {
    perms.push([...current]); current.splice(0, current.length);
    return perms;
  }

  effects.forEach(e => {
    e.each(player, boss);
    e.timer--;
  });
  effects = effects.filter(e => e.timer > 0);

  const available = availableSpells(spells, mana, effects);

  available.forEach(spell => {
    spell.cast(player, boss);
    const spellList = [...current, spell];
    const newEffects = _.cloneDeep([...effects, spellEffect(spell)]);
    allSpellPerms(player, boss, mana - spell.cost, max, spellList, newEffects, perms);
  });
  return perms;
}

const availableSpells = (spells, mana, effects) => {
  const eNames = effects.map(e => e.name);
  return spells.filter(s => s.cost <= mana && !eNames.includes(s.name))
};

result = spells => {
  const player = { hp: 50, armor: 0, mana: 500 };
  const boss = { hp: 51, damage: 9 };
  return { win: true, cost: _.sum(spells.map(s => s.cost)) };
}

module.exports = {
  allSpellPerms,
  result
};
