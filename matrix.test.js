const Matrix = require('./matrix');

test('adding scalar to matrix', () => {

  let m = new Matrix(3, 3);
  m.data[0] = [1, 2, 3];
  m.data[1] = [4, 5, 6];
  m.data[2] = [7, 8, 9];
  m.add(1);

  expect(m).toEqual(
    {
      data: [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10]
      ],
      cols: 3,
      rows: 3
    }
  );
});
