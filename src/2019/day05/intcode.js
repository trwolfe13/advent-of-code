const parse = p => p.split(',').map(Number);

const instructions = {
  1: {
    paramCount: 3,
    execute: (program, params) => {
      program[params[2]] = params[0] + params[1];
    }
  },
  2: {
    paramCount: 3,
    execute: (program, params) => {
      program[params[2]] = params[0] * params[1];
    }
  }
};

const parseInstruction = instruction => {
  return { opCode: instruction };
};

const execute = (program) => {
  let position = 0;
  while (position != -1) {
    position += executeOp(program, position);
  }
}

const executeOp = (program, position) => {
  const instruction = parseInstruction(program[position]);

  const ex = instructions[instruction.opCode];
  const params = program.slice(position + 1, ex.paramCount);
  ex.execute(program, params)

  return 1 + params.length;
};

module.exports = {
  parse,
  execute,
  executeOp
};
