const Moment = require('moment');
const _ = require('lodash');

const string = require('../../util/array');
const string = require('../../util/string');
const object = require('../../util/object');

const parse = input => {
  const guards = {};
  let curGuard;

  _.sortBy(string.lines(input).map(l => ({ date: Moment(l.substring(1, 17)), action: l.substring(19) })), 'date').forEach(o => {
    if (o.action.startsWith('Guard')) {
      const id = Number(o.action.match(/#(\d+)/)[1]);
      lastAction = undefined;
      curGuard = guards[id] || (guards[id] = { id, actions: {} });
    } else {
      const dp = o.date.format('YYYY-MM-DD');
      const curDate = curGuard.actions[dp] || (curGuard.actions[dp] = {});

      const awake = Object.keys(curDate).length === 0 || curDate[Object.keys(curDate).length - 1] === 1;

      const lastMinute = Math.max(0, Object.keys(curDate).length - 1);
      const thisMinute = o.date.minute();

      for (let m = lastMinute; m < thisMinute; m++) {
        curDate[m] = awake ? 1 : 0;
      }
      curDate[thisMinute] = o.action.startsWith('wakes') ? 1 : 0;
    }
  });
  object.forEachKey(guards, g => {
    object.forEachKey(g.actions, date => {
      const minutes = Object.keys(date).map(Number);
      const last = date[minutes.length - 1];
      for (let x = minutes.length - 1; x < 60; x++) {
        date[x] = last;
      }
    });
  });
  return guards;
};

const mostAsleep = guards => {
  return guards[99]; // TODO: Finish
}

const minuteMostAsleep = guard => {
  return 2; // TODO: Finish
}

const strategy1 = guards => {
  const guard = mostAsleep(guards);
  const minute = minuteMostAsleep(guard);
  return guard.id * minute;
}

module.exports = function (input) {
  const guards = parse(input);
  return strategy1(guards);
}