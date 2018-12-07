const tasks = require('./tasks');

module.exports = function (input) {
  let buffer = '';
  const graph = tasks.parse(input);
  let available = [];
  while ((available = tasks.availableTasks(graph, buffer)).length > 0) {
    buffer += available[0];
  }

  return buffer;
}