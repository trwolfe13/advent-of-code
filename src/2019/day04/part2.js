function isValid(number) {
  const digits = String(number).split('').map(Number);
  const segments = [];
  let segment = '';
  for (let i = 0; i < digits.length; i++) {
    if (!segment || segment[0] === digits[i].toString()) {
      segment += digits[i];
    } else {
      segments.push(segment);
      segment = digits[i].toString();
    }
    if (i === 0) { continue; }
    if (digits[i - 1] > digits[i]) { return false; }
  }
  segments.push(segment);
  return segments.some(s => s.length === 2);
}

module.exports = function (input) {
  const [start, end] = input.split('-').map(Number);
  const valid = [];
  for (let x = start; x <= end; x++) {
    if (isValid(x)) { valid.push(x) };
  }
  return valid.length;
}