const { books } = require('./dados');
const assert = require('assert');

// 4 - Encontre o livro com o maior nome.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  const result = books.reduce((acc, curr) =>
    acc.name.length > curr.name.length ? acc : curr,
  );
  return result;
}

console.log(longestNamedBook());
assert.deepStrictEqual(longestNamedBook(), expectedResult);
