const { sum, myRemove } = require("./sum");

// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//   1 - Teste se o retorno de sum(4, 5) é 9
//   2 - Teste se o retorno de sum(0, 0) é 0
//   3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//   4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Requisito 1 - Teste da função sum', () => {

  test('1 - Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  
  test('2 - Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  
  test('3 - Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });
  
  test('4 - Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });

})

// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//   1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//   2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//   3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

