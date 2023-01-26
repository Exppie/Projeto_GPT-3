import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Requisite acesso antecipado</h4>
        <h1 className='gradient__text'>As possibilidades estão além da sua imaginação</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae vel, quibusdam nam quis aperiam voluptate, consequuntur repudiandae obcaecati tempora dolore pariatur numquam voluptatem culpa. Error inventore quis dignissimos reiciendis?</p>
        <h4>Peça acesso antecipado</h4>
      </div>
    </div>
  );
}

export default Possibility