const password = require('./password');;

const part1 = require('./part1');
const part2 = require('./part2');

describe('day11', () => {
  describe('increment', () => {
    it('first increment', () => {
      expect(password.increment([0, 0, 0])).toEqual([0, 0, 1]);
    });
    it('more tests', () => {
      expect(password.increment([4, 5, 6])).toEqual([4, 5, 7]);
      expect(password.increment([4, 5, 7])).toEqual([4, 5, 8]);
    });
    it('carrying digits', () => {
      expect(password.increment([4, 5, 22])).toEqual([4, 6, 0]);
      expect(password.increment([4, 22, 22])).toEqual([5, 0, 0]);
      expect(password.increment([4, 22, 21])).toEqual([4, 22, 22]);
    });
  });
  describe('doubleLetter', () => {
    it('valid', () => {
      expect(password.doubleLetter.test('abcdffaa')).toBeTruthy();
      expect(password.doubleLetter.test('ghjaabcc')).toBeTruthy();
      expect(password.doubleLetter.test('abbceffg')).toBeTruthy();
    });
    it('invalid', () => {
      expect(password.doubleLetter.test('hnjklmmn')).toBeFalsy();
      expect(password.doubleLetter.test('abbcegjk')).toBeFalsy();
    });
  });
  describe('isValid', () => {
    it('valid', () => {
      expect(password.isValid(password.toNumbers('abcdffaa'))).toBeTruthy();
      expect(password.isValid(password.toNumbers('ghjaabcc'))).toBeTruthy();
    });
    it('invalid', () => {
      expect(password.isValid(password.toNumbers('hijklmmn'))).toBeFalsy();
      expect(password.isValid(password.toNumbers('abbceffg'))).toBeFalsy();
      expect(password.isValid(password.toNumbers('abbcegjk'))).toBeFalsy();
    });
  });
  describe('hasSequential', () => {
    it('has increment', () => {
      expect(password.hasSequential([0, 1, 2])).toBeTruthy();
      expect(password.hasSequential([1, 7, 3, 4, 5, 1, 3])).toBeTruthy();
    });
    it('no increment', () => {
      expect(password.hasSequential([0, 1, 1])).toBeFalsy();
      expect(password.hasSequential([1, 7, 3, 4, 6, 1, 3])).toBeFalsy();
    });
  });
  describe('nextValidPassword', () => {
    it('correct answer', () => {
      expect(password.nextValidPassword('abcdefgh')).toEqual('abcdffaa');
    })
  });
});
