//Qual Seletor Usar - Exercício

// Vamos consolidar a manipulação dos elementos HTML , colocando a cor do Administrador de Tempo da Trybe como na imagem em anexo usando apenas o JavaScript!

function tagBackground(tag, color) {
  document.getElementsByTagName(tag)[0].style.backgroundColor = color;
}

function classBackground(className, color) {
  document.getElementsByClassName(className)[0].style.backgroundColor = color;
}

function titleTableColor(place, i, color) {
  document.querySelectorAll(place)[i].style.backgroundColor = color;
}

tagBackground('h1', 'mediumseagreen');
tagBackground('footer', 'darkslategray');
classBackground('emergency-tasks', 'salmon');
classBackground('no-emergency-tasks', 'khaki');
titleTableColor('.emergency-tasks h3', 0, 'blueviolet');
titleTableColor('.emergency-tasks h3', 1, 'blueviolet');
titleTableColor('.no-emergency-tasks h3', 0, 'black');
titleTableColor('.no-emergency-tasks h3', 1, 'black');
