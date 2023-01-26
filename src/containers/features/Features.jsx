import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  // Criando um array com os dados
  {
    title:'Melhorando e desbravando o desconhecido',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },

  {
    title:'Torne-se um criador de tendências',
    text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },

  {
    title:'Mensagens com respostas inteligentes',
    text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  
  {
    title:'Respostas geradas em tempo real',
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'> O futuro é agora! Você só precisa realizar! Mergulhe no futuro hoje e faça acontecer</h1>
        <p>Requisite acesso prévio para começar</p>
      </div>
      <div className='gpt3__features-container'>
        {/* criando um bloco dinâmico */}
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text}  key={item.title + index} />
        ))} 
        {/* reusando componentes já criados */}
      </div>
    </div>
  )
}

export default Features