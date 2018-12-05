const _ = require('lodash');

const shop = {
  weapons: [
    { name: 'Dagger', cost: 8, damage: 4, armor: 0, type: 'weapon' },
    { name: 'Shortsword', cost: 10, damage: 5, armor: 0, type: 'weapon' },
    { name: 'Warhammer', cost: 25, damage: 6, armor: 0, type: 'weapon' },
    { name: 'Longsword', cost: 40, damage: 7, armor: 0, type: 'weapon' },
    { name: 'Greataxe', cost: 74, damage: 8, armor: 0, type: 'weapon' },
  ],
  armor: [
    { name: 'None', cost: 0, damage: 0, armor: 0, type: 'armor' },
    { name: 'Leather', cost: 13, damage: 0, armor: 1, type: 'armor' },
    { name: 'Chainmail', cost: 31, damage: 0, armor: 2, type: 'armor' },
    { name: 'Splintmail', cost: 53, damage: 0, armor: 3, type: 'armor' },
    { name: 'Bandedmail', cost: 75, damage: 0, armor: 4, type: 'armor' },
    { name: 'Platemail', cost: 102, damage: 0, armor: 5, type: 'armor' },
  ],
  rings: [
    { name: 'None 1', cost: 0, damage: 0, armor: 0 },
    { name: 'None 2', cost: 0, damage: 0, armor: 0 },
    { name: 'Damage + 1', cost: 25, damage: 1, armor: 0 },
    { name: 'Damage + 2', cost: 50, damage: 2, armor: 0 },
    { name: 'Damage + 3', cost: 100, damage: 3, armor: 0 },
    { name: 'Defense + 1', cost: 20, damage: 0, armor: 1 },
    { name: 'Defense + 2', cost: 40, damage: 0, armor: 2 },
    { name: 'Defense + 3', cost: 80, damage: 0, armor: 3 }
  ]
};

const allEquipmentPerms = () => {
  const perms = [];
  shop.weapons.forEach(w => {
    shop.armor.forEach(a => {
      shop.rings.forEach((r1, i) => {
        shop.rings.filter(r => r.name !== r1.name).forEach(r2 => {
          perms.push({
            cost: w.cost + a.cost + r1.cost + r2.cost,
            damage: w.damage + a.damage + r1.damage + r2.damage,
            armor: w.armor + a.armor + r1.armor + r2.armor,
            equipment: [w, a, r1, r2]
          });
        });
      })
    });
  });
  return perms;
}

const canWin = equipment => {
  const b = { hp: 109, damage: 8, armor: 2 };
  const p = { hp: 100, damage: equipment.damage, armor: equipment.armor };
  let a = p, d = b;
  while (a.hp > 0 && d.hp > 0) {
    const dmg = Math.max(1, a.damage - d.armor);
    d.hp -= dmg;
    const temp = a; a = d; d = temp;
  }
  return b.hp <= 0;
}

module.exports = {
  allEquipmentPerms,
  canWin
};
