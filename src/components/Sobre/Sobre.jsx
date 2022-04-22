import mascote from '../../assets/images/mascote.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import * as S from './Sobre.style';

const Sobre = () => {
        
    return (
        <S.Container>
            <button>Receba nossa newsletter</button>
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
                <img src={facebook} alt="facebook" />
                <a href="https://www.instagram.com/ummaluconocodaco/" target="_blank"><img src={instagram} alt="instagram" /></a>
                <img src={linkedin} alt="linkedin" />
            </div>
        </S.Container>
    )
}
       
export default Sobre;