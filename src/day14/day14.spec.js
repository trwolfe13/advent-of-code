const day14 = require('./day14');

// describe('day14', () => {
//   describe('toBinary', () => {
//     it('Produces the correct output 1', () => {
//       expect(day14.toBinary('4')).toEqual([0, 1, 0, 0]);
//     });
//     it('Produces the correct output 1', () => {
//       expect(day14.toBinary('5')).toEqual([0, 1, 0, 1]);
//     });
//     it('Produces the correct output 1', () => {
//       expect(day14.toBinary('a')).toEqual([1, 0, 1, 0]);
//     });
//     it('Produces the correct output 1', () => {
//       expect(day14.toBinary('ae')).toEqual([1, 0, 1, 0, 1, 1, 1, 0]);
//     });
//   });
//   describe('tree', () => {
//     it('Produces the correct output 1', () => {
//       const d = [
//         [0, 0, 1, 0],
//         [0, 1, 1, 0],
//         [0, 1, 0, 0],
//         [0, 0, 1, 0],
//       ];
//       const t = day14.tree(d);
//       expect(Object.keys(t).length).toBe(5);
//       expect(t['2,0'].length).toBe(1);
//       expect(t['2,0']).toEqual(['2,1']);
//       expect(t['2,1'].length).toBe(2);
//       expect(t['2,1']).toEqual(['1,1', '2,0']);
//       expect(t['1,1'].length).toBe(2);
//       expect(t['1,1']).toEqual(['2,1', '1,2']);
//       expect(t['2,3'].length).toEqual(0);
//     });
//   });
//   describe('count', () => {
//     it('Produces the correct output 1', () => {
//       const d = [
//         [0, 0, 1, 0, 0],
//         [0, 1, 1, 0, 0],
//         [0, 1, 0, 1, 0],
//         [0, 0, 1, 1, 0],
//         [0, 0, 0, 0, 0],
//       ];
//       const t = day14.tree(d);
//       const c = day14.count(t);
//       expect(c).toEqual(2);
//     });
//   });
//   describe('part1', () => {
//     it('Produces the correct output 1', () => {

//     });
//   });
//   describe('part2', () => {
//     it('Produces the correct output 1', () => {

//     });
//   });
// });
