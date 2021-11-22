const { books } = require('./dados');
const assert = require('assert');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

// Opção com função:

function averageAge() {
  const result = books.reduce(
    (acc, curr) => acc + (curr.releaseYear - curr.author.birthYear),
    0,
  );
  return result / books.length;
}

console.log(averageAge());
assert.deepStrictEqual(averageAge(), expectedResult);

// Opção sem função:

const result = books.reduce(
  (acc, curr) => acc + (curr.releaseYear - curr.author.birthYear),
  0,
);

console.log(result / books.length);
assert.deepStrictEqual(result / books.length, expectedResult);
