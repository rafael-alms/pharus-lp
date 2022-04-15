import * as S from './Inicio.style';
import escola from '../../assets/images/escola.png';

const Inicio = () => {

    return (
        <S.Container>
            <S.Imagem>
                <div className="telas">
                    <img src={escola} alt="escola" />
                </div>
            </S.Imagem>
            <div>
                <p className='titulo'>EDUCAR PARA DESENVOLVER</p>
                <p className='conteudo'>Estar preparado para caminhar em um mundo volátil, complexo, onde a informação e a demanda por novos conhecimentos são cada dia mais necessários, a Escola precisa abrir as portas para que sua grade curricular possa estar complementada para um novo cenário de mercado.<br />O Pharus é um aplicativo educacional que tem como finalidade criar uma parceria entre Escola / Aluno / Empresa.<br />Através de projetos gamificados promover o aprendizado dos alunos.</p>
                <button>Saiba mais</button>
            </div>
        </S.Container>
    )
}
       
export default Inicio;