function turingTape () {
  let values = { 0: 0 };
  let current = 0;
  let stateValue = 'A';
  return {
    state: s => stateValue = (s || stateValue),
    moveRight: () => values[++current] = (values[current] || 0),
    moveLeft: () => values[--current] = (values[current] || 0),
    read: () => values[current] || 0,
    write: n => values[current] = n,
    checksum: () => Object.keys(values).map(v => values[v]).reduce((p, c) => p + c, 0),
    toString: () => {
      const keys = Object.keys(values).map(Number).sort((l, r) => l - r);
      const tape = keys.map(k => k === current ? `[${values[k]}]` : values[k]).join(' ');
      return `{${stateValue}}: ${tape}`;
    }
  };
}

function testBlueprint (tape) {
  switch (tape.state()) {
    case 'A':
      if (tape.read()) {
        tape.write(0);
        tape.moveLeft();
      } else {
        tape.write(1);
        tape.moveRight();
      }
      tape.state('B');
      break;
    case 'B':
      if (tape.read()) {
        tape.write(1);
        tape.moveRight();
      } else {
        tape.write(1);
        tape.moveLeft();
      }
      tape.state('A');
      break;
  }
}

function runPart1 (tape) {
  switch (tape.state()) {
    case 'A':
      if (tape.read()) {
        tape.write(0); tape.moveRight(); tape.state('F');
      } else {
        tape.write(1); tape.moveRight(); tape.state('B');
      }
      break;
    case 'B':
      if (tape.read()) {
        tape.write(1); tape.moveLeft(); tape.state('C');
      } else {
        tape.write(0); tape.moveLeft(); tape.state('B');
      }
      break;
    case 'C':
      if (tape.read()) {
        tape.write(0); tape.moveRight(); tape.state('C');
      } else {
        tape.write(1); tape.moveLeft(); tape.state('D');
      }
      break;
    case 'D':
      if (tape.read()) {
        tape.write(1); tape.moveRight(); tape.state('A');
      } else {
        tape.write(1); tape.moveLeft(); tape.state('E');
      }
      break;
    case 'E':
      if (tape.read()) {
        tape.write(0); tape.moveLeft(); tape.state('D');
      } else {
        tape.write(1); tape.moveLeft(); tape.state('F');
      }
      break;
    case 'F':
      if (tape.read()) {
        tape.write(0); tape.moveLeft(); tape.state('E');
      } else {
        tape.write(1); tape.moveRight(); tape.state('A');
      }
      break;
  }
}

module.exports = {
  turingTape,
  testBlueprint,
  part1: function () {
    const tape = turingTape();
    for (let n = 0; n < 12964419; n++) {
      runPart1(tape);
    }
    return tape.checksum();
  },
  part2: function () {
    return 0;
  }
}
