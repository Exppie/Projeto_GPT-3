import React from 'react';
import  { Article }   from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Muita coisa está acontecendo, <br/>Estamos documentando tudo!</h1>
      </div>
      <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 e Open AI são o Futuro. Vamos explora-lo?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 e Open AI são o Futuro. Vamos explora-lo?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 e Open AI são o Futuro. Vamos explora-lo?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 e Open AI são o Futuro. Vamos explora-lo?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 e Open AI são o Futuro. Vamos explora-lo?" />
      </div>
      </div>
    </div>
  )
}

export default Blog