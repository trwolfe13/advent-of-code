const string = require('../../util/string');

const alphabet = 'abcdefghjkmnpqrstuvwxyz';
const toNumbers = input => string.chars(input).map(c => alphabet.indexOf(c));
const toLetters = input => input.map(n => alphabet[n]).join('');
const doubleLetter = /.*(.)\1(?!.*\1\1).*(.)\2.*/;

const increment = input => {
  const pwd = [...input];
  let i = pwd.length - 1;
  pwd[i]++;
  while (pwd[i] >= alphabet.length) {
    pwd[i] = 0;
    i--;
    pwd[i]++;
  }
  return pwd;
};

const hasSequential = input => {
  for (let i = 0; i < input.length - 2; i++) {
    const n = input[i];
    if (input[i + 1] === n + 1 && input[i + 2] === n + 2) {
      return true;
    }
  }
  return false;
}

const isValid = input => {
  const pwd = toLetters(input);
  return doubleLetter.test(pwd) && hasSequential(input);
};

const nextValidPassword = input => {
  let pwd = toNumbers(input);
  do {
    pwd = increment(pwd);
  } while (!isValid(pwd))
  return toLetters(pwd);
};

module.exports = {
  doubleLetter,
  toNumbers,
  toLetters,
  increment,
  isValid,
  nextValidPassword,
  hasSequential
};
