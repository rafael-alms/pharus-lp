import mascote from '../../assets/images/mascote.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import * as S from './Sobre.style';
import Newsletter from '../../components/Newsletter'
import { useState } from 'react';

const Sobre = () => {

    const [buttonNewsletter, setButtonNewsletter] = useState(false);
        
    return (
        <S.Container>
            <button className="cadastro-newsletter" onClick={() => setButtonNewsletter(true)}>Receba nossa newsletter</button>
            <Newsletter trigger={buttonNewsletter} setTrigger={setButtonNewsletter} />
            <p className='titulo hidden'>Sobre nós</p>
            <div className='conteudo'>
                <img className="mascote" src={mascote} alt="El Brabo" />
                <div className='texto'>
                    <p className='titulo'>Sobre nós</p>
                    <p className='dados'>
                        Um maluco no codaço S/A<br />
                        Avenida Afonso Pena, 1234 - 32º andar<br />
                        Belo Horizonte, MG<br />
                        CNPJ 12.345.678/0001-99<br />
                    </p>
                </div>
            </div>
            <p className='convite'>Siga-nos em nossas redes:</p>
            <div className='redes'>
                <img src={facebook} alt="facebook" title="Em breve!" />
                <a href="https://www.instagram.com/ummaluconocodaco/" target="_blank"><img src={instagram} alt="instagram" /></a>
                <img src={linkedin} alt="linkedin" title="Em breve!" />
            </div>
        </S.Container>
    )
}
       
export default Sobre;