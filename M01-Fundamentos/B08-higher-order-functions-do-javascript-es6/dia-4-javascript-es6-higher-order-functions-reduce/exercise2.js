const { books } = require('./dados');
const assert = require('assert');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

// Opção com função:

function reduceNames() {
  const result = books.reduce(
    (acc, curr, index) =>
      index === books.length - 1
        ? acc + `${curr.author.name}.`
        : acc + `${curr.author.name}, `,
    '',
  );
  return result;
}

console.log(reduceNames());
assert.deepStrictEqual(reduceNames(), expectedResult);

// Opção sem função:

const result = books.reduce(
  (acc, curr, index) =>
    index === books.length - 1
      ? acc + `${curr.author.name}.`
      : acc + `${curr.author.name}, `,
  '',
);

console.log(result);
assert.deepStrictEqual(result, expectedResult);
