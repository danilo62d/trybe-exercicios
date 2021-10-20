//Seletores de Elementos - Exercício 1

// 1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById('page-title').innerText = '300';
// 2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById('second-paragraph').innerText =
  'Filme com muita ação e inovação nos efeitos especiais.';
// 3 - Por fim, recupere o subtítulo e altere-o também.
document.getElementById('subtitle').innerText = 'Qual motivo?';

//Seletores de Elementos - Exercício 2

//Utilizando o mesmo template de exercício anterior:

// 1 - Adicione uma classe igual para os dois parágrafos.
// Adicionado no arquivo HTML.

// 2 - Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName('paragraphs');

// 3 - Altere algum estilo do primeiro deles.
document.getElementsByClassName('paragraphs')[0].style.backgroundColor =
  'yellow';

// 4 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.getElementsByTagName('h4')[0].style.color = 'red';
