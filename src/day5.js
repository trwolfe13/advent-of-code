function parse(input) {
  return input.match(/[^\r\n]+/g).map(r => Number(r.trim()));
}

function execute(instructions, index) {
  const jump = instructions[index]++;
  return index + jump;
}

module.exports = {
  parse,
  execute,
  part1: function (input) {
    const instructions = parse(input);
    let total = 0;
    let index = 0;
    do {
      index = execute(instructions, index);
      total++;
    } while (index > -1 && index < instructions.length)
    return total;
  },
  part2: function (input) {
    return 0;
  }
}