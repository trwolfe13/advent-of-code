const tasks = require('./tasks');

allocateTasks = (available, state, maxWorkers) => {
  if (state.length >= maxWorkers) { return; }
  while (state.length < maxWorkers && available.length) {
    const task = available.shift();
    state.push({ task, duration: 60 + (task.charCodeAt(0) - 64) });
  }
};

processTasks = state => {
  let buffer = '';
  for (let x = state.length - 1; x >= 0; x--) {
    state[x].duration--;
    if (state[x].duration === 0) {
      buffer += state[x].task;
      state.splice(x, 1);
    }
  }
  return buffer;
}

module.exports = function (input) {
  const graph = tasks.parse(input);
  const maxWorkers = 5, state = [];
  let buffer = '', available = [], time = 0;
  while (buffer.length < Object.keys(graph).length) {
    buffer += processTasks(state);
    available = tasks.availableTasks(graph, buffer).filter(t => !state.map(s => s.task).includes(t));
    allocateTasks(available, state, maxWorkers);
    // console.log(time, state, buffer);
    time++;
  }
  return time - 1;
}