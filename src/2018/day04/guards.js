const Moment = require('moment');
const _ = require('lodash');

const array = require('../../util/array');
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

      const awake = !Object.keys(curDate).length || !curDate[Object.keys(curDate).length - 1];

      const lastMinute = Math.max(0, Object.keys(curDate).length - 1);
      const thisMinute = o.date.minute();

      for (let m = lastMinute; m < thisMinute; m++) {
        curDate[m] = awake ? 0 : 1;
      }
      curDate[thisMinute] = o.action.startsWith('falls') ? 1 : 0;
    }
  });
  object.values(guards).forEach(g => {
    object.values(g.actions).forEach(date => {
      const minutes = Object.keys(date).map(Number);
      const last = date[minutes.length - 1];
      for (let x = minutes.length - 1; x < 60; x++) {
        date[x] = last;
      }
    });
  });
  return guards;
};

const minuteSlept = (guard, minute) => _.sum(object.values(guard.actions).map(n => n[minute]));
const minutesSlept = guard => _.sum(object.values(guard.actions).map(a => _.sum(Object.values(a))));
const mostAsleep = guards => array.projectReduce(Object.keys(guards).map(k => guards[k]), minutesSlept, (p, c) => c > p).obj;

const minuteMostAsleep = guard => {
  let most = -1, minute;
  for (let m = 0; m < 60; m++) {
    const c = minuteSlept(guard, m);
    if (c > most) {
      minute = m;
      most = c;
    }
  }
  return minute;
};

module.exports = {
  parse,
  mostAsleep,
  minuteSlept,
  minuteMostAsleep,
}