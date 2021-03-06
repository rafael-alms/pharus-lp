import * as S from './Inicio.style';
import escola from '../../assets/images/escola-pharus.svg';
import Header from '../../components/Header'
import SaibaMais from '../../components/SaibaMais'
import { useState } from 'react';

const Inicio = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <Header />
            <S.Container>
                <S.Imagem>
                    <div className="telas">
                        <img src={escola} alt="escola" />
                    </div>
                </S.Imagem>
                <div>
                    <p className='titulo'>Guiando mentes para um futuro brilhante</p>
                    <p className='conteudo'>Para estar preparado para caminhar em um mundo volátil, complexo, onde a informação e a demanda por novos conhecimentos são cada dia mais necessários. Neste cenário, a escola precisa abrir as portas para que sua grade curricular possa ser complementada para um novo cenário de mercado.</p>
                    <p className='conteudo'>O Pharus é um aplicativo educacional que tem como finalidade criar uma parceria entre escola, aluno e empresa, através de projetos gamificados para promover o aprendizado dos alunos.</p>
                    <button className="saiba-mais" onClick={() => setButtonPopup(true)}> Saiba mais </button>
                    <SaibaMais trigger={buttonPopup} setTrigger={setButtonPopup} />
                </div>
            </S.Container>
        </>
    )
}
       
export default Inicio;