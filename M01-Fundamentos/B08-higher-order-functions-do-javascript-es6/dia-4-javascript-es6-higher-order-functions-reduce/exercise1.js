// 1 - Dada uma matriz, transforme em um array.

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// Opção com função:

function flatten() {
  const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return result;
}

console.log(flatten());

// Opção sem função:

const result = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(result);
