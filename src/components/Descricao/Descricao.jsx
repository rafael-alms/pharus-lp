import image from '../../assets/images/image.png';
import * as S from './Descricao.style';

const Descricao = () => {
        
    return (
        <S.Container>
            <S.Imagem>
                <img src={image} alt="image" />
            </S.Imagem>
            <S.Texto>
                <p className='titulo'>Descrição</p>
                <p className='conteudo'>O Pharus nasceu através da leitura e estudo da <a href="https://brasil.un.org/pt-br/sdgs" target="_blank">ODS 8 da ONU</a>, por meio da 4ª Edição do Camp da Ioasys.</p>
                <p className='conteudo'>O time formado por 11 integrantes de diversas áreas e localidades do país, através da aplicação de metodologia de Discovery e Produtos, focaram o trabalho para melhoria da capacitação de jovens do ensino médio ao fundamental para Escolas Públicas.</p>
                <p className='conteudo'>O Pharus é um aplicativo educacional, desenvolvido para ser aplicado em plataforma Android e IOS.</p>
                <p className='conteudo'>O aplicativo irá permitir que Escolas possam formar parcerias com empresas, trazendo para a grade curricular disciplinas para desenvolver e capacitar alunos, visando a motivação educional e a entrada no mercado de trabalho.</p>
                <p className='conteudo'>O aplicativo permitirá ao aluno escolher um Avatar para que possa ter um ambiente de game para executar tarefas a serem aplicadas em projetos de parcerias.</p>
                <p className='conteudo'>O Pharus irá mostrar o ranking dos alunos, incentivando a sua busca por conhecimentos.</p>
                <p className='conteudo'>A gamificação será o gatilho para envolver os jovens na iniciativa de conhecer novas disciplinas.</p>
            </S.Texto>
        </S.Container>
    )
}
       
export default Descricao;