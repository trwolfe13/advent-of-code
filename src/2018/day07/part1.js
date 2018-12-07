const string = require('../../util/string');
const object = require('../../util/object');
const _ = require('lodash');

const parse = input => {
  const instructions = string.lines(input).map(l => ({ task: l.substring(36, 37), dep: l.substring(5, 6) }));
  const tasks = {};
  instructions.forEach(i => {
    if (!tasks[i.task]) { tasks[i.task] = []; }
    tasks[i.task].push(i.dep);
  });
  _.chain(object.values(tasks)).flatten().uniq().difference(Object.keys(tasks)).value().forEach(t => tasks[t] = []);
  return tasks;
}

const available = (graph, completed) =>
  Object.keys(graph)
    .filter(key => !completed.includes(key) && graph[key].filter(d => !completed.includes(d)).length === 0)
    .sort();

module.exports = function (input) {
  let buffer = '';
  const graph = parse(input);
  let availableTasks = [];
  while ((availableTasks = available(graph, buffer)).length > 0) {
    buffer += availableTasks[0];
  }

  return buffer;
}