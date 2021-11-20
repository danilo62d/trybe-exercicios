const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const result = names.find(findNameWithFiveLetters);

console.log(result);
