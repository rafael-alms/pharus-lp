import * as S from './Newsletter.style';
import newsletter from '../../assets/images/newsletter.svg';
import React from 'react';

const Newsletter = (props) => {

    return (props.trigger) ? (
        <S.Container>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className="conteudo1">
                        <p className='title'>Receba nossa newsletter</p>
                        <p className='conteudo'>Quer ficar por dentro do Pharus e do universo da gamificação educacional?<br /> É só assinar a nossa newsletter! </p>
                        <img src={newsletter} alt="newsletter" />
                    </div>
                    <div className='conteudo2'>
                        <div className='inputs'>
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" placeholder='Seu nome aqui'/>
                        </div>
                        <div className='inputs'>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" placeholder='email@example.com' />
                        </div>
                        <div className='btn'>
                            <button className='send-btn'>Enviar</button><br />
                            <button className='close-btn' onClick={() => props.setTrigger(false)}>Cancelar</button>
                        </div>
                    </div>
                    { props.children }
                </div>
            </div>
        </S.Container>
    ) : "";
}
       
export default Newsletter;