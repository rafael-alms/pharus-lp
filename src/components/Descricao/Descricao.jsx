import tela1 from '../../assets/images/tela1.png';
import * as S from './Descricao.style';

const Descricao = () => {
        
    return (
        <S.Container>
            <S.Imagem>
                <img src={tela1} alt="Tela do app" />
            </S.Imagem>
            <S.Texto>
                <p className='titulo'>Descrição</p>
                <p className='conteudo'>O Pharus é um aplicativo educacional, desenvolvido para ser aplicado em plataforma Android e IOS, e irá permitir que escolas possam formar parcerias com empresas, trazendo para a grade curricular disciplinas para desenvolver e capacitar alunos, visando a motivação educional e a entrada no mercado de trabalho.</p>
                <p className='conteudo paragrafo'>Outra caracteristica será permitir ao aluno escolher um avatar para que possa ter um ambiente de game para executar tarefas a serem aplicadas em projetos de parcerias.</p>
                <p className='conteudo paragrafo'>O aplicativo irá mostrar o ranking dos alunos, incentivando a sua busca por conhecimentos.</p>
                <p className='conteudo'>A gamificação será o gatilho para envolver os jovens na iniciativa de conhecer novas disciplinas.</p>
            </S.Texto>
        </S.Container>
    )
}
       
export default Descricao;