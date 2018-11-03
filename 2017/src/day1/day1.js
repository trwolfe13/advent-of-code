module.exports = {
  part1: function (sequence) {
    let prevChar = sequence.charAt(sequence.length - 1);
    let total = 0;

    for (let x = 0; x < sequence.length; x++) {
      const curChar = sequence.charAt(x);
      if (curChar === prevChar) {
        total += Number(curChar);
      }
      prevChar = curChar;
    }

    return total;
  },
  part2: function(sequence) {
    let total = 0;

    const offset = sequence.length / 2;

    for (let x = 0; x < sequence.length; x++) {
      const curChar = sequence.charAt(x);
      const nextChar = sequence.charAt((x + offset) % sequence.length);

      if (curChar === nextChar) {
        total += Number(curChar);
      }
    }

    return total;
  }
}