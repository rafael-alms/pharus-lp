import * as S from './SaibaMais.style';
import ods8 from '../../assets/images/ods8.svg';
import React from 'react';

const SaibaMais = (props) => {

    return (props.trigger) ? (
        <S.Container>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className="texto-img">
                            <div className='texto'>
                                <p className='titulo'>Mais sobre o Pharus</p>
                                <p className='conteudo'>O Pharus nasceu através da leitura e estudo da ODS 8 da ONU, como parte do desafio final da 4ª Edição do Camp da Ioasys.</p>
                                <p className='conteudo paragrafo'>O time é composto por 11 integrantes de diversas áreas e localidades do país, através da aplicação de metodologia de Discovery e Produtos, focaram o trabalho para melhoria da capacitação de jovens do ensino médio ao fundamental para Escolas Públicas.</p>
                                <p className='conteudo paragrafo'>Para maiores informações e detalhes sobre o processo de Discovery, <a href='https://www.notion.so/Discovery-2d3ea690bc8042b9a1884cab24d777bf' target="_blank">clique aqui</a>.</p>
                            </div>
                        <img src={ods8} alt="ODS 8" />
                    </div>
                        
                    { props.children }
                </div>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Fechar</button>
            </div>
        </S.Container>
    ) : "";
}
       
export default SaibaMais;