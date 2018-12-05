const _ = require('lodash');
const rpg = require('./rpg');

module.exports = function (input) {
  const ep = _.orderBy(rpg.allEquipmentPerms(), 'cost', 'desc');
  for (let x = 0; x < ep.length; x++) {
    if (!rpg.canWin(ep[x])) { return ep[x].cost; }
  }
  return -1;
}