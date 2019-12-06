function isValid(number) {
  const digits = String(number).split('').map(Number);
  let hasDouble = false;
  for (let i = 0; i < digits.length; i++) {
    if (i === 0) { continue; }
    if (digits[i - 1] > digits[i]) { return false; }
    if (digits[i] === digits[i - 1]) { hasDouble = true; }
  }
  return hasDouble;
}

module.exports = function (input) {
  const [start, end] = input.split('-').map(Number);
  const valid = [];
  for (let x = start; x <= end; x++) {
    if (isValid(x)) { valid.push(x) };
  }
  return valid.length;
}