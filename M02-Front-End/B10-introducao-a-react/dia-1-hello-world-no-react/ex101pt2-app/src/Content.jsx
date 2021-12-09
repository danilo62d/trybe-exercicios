import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return conteudos.map((data) => (
      <ul className='content' key={data.conteudo}>
        <li>O conteúdo é: {data.conteudo}</li>
        <li>Status: {data.status}</li>
        <li>Bloco: {data.bloco}</li>
      </ul>
    ))
  }
}

export default Content;