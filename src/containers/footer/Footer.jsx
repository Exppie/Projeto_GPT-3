import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Faça parte do futuro <br/> antes de todos</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Requesite acesso prévio</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div' >
          <h4>Links</h4>
          <p>Overons</p>
          <p>Redes sociais</p>
          <p>Contadores</p>
          <p>Contatos</p>
        </div>
        <div className='gpt3__footer-links_div' >
          <h4>Empresa</h4>
          <p>Termos & Condições</p>
          <p>Redes Sociais</p>
          <p>Contatos</p>
        </div>
        <div className='gpt3__footer-links_div' >
          <h4>Fale conosco</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb,</p>
          <p>4402-8922</p>
          <p>Chatgpt@openAi.info</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer