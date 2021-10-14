// Exercícios - Arrays (listas)

// Exercício 1
// Obtenha o valor "Serviços" do array menu :
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = ;
// console.log(menuServices);
/*
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];
console.log(menuServices);
*/

//Exercício 2
// Procure o índice do valor "Portfólio" do array menu :
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = ;
// console.log(indexOfPortfolio);
/*
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);
*/

// Exercício 3
// Adicione o valor "Contato" no final do array menu :
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// console.log(menu);
/*
let menu = ["Home", "Serviços", "Portfólio", "Links"];
menu.push("Contato");
console.log(menu);
*/

// Exercícios - For

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
/*
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
}
*/
// com for/of:
/*
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let grocery of groceryList) {
  console.log(grocery);
}
*/
// Exercícios - For/Of

// Exercício 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log() :
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
/*
let names = ["João", "Maria", "Antônio", "Margarida"];
for (let name of names) {
  console.log(name);
}
*/
