import * as S from './Home.style'
import Inicio from '../../components/Inicio'
import Descricao from '../../components/Descricao'
import Estatisticas from '../../components/Estatisticas'
import Depoimentos from '../../components/Depoimentos/'
import Sobre from '../../components/Sobre/'

const Home = () => {

    return (
    <>
      <S.Container>
        <div className='inicio'><Inicio /></div>
        <div className='description'><Descricao /></div>
        <div id="statistics" className='statistics'><Estatisticas /></div>
        <div className='depositions'><Depoimentos /></div>
        <div id="about" className='about'><Sobre /></div>
      </S.Container>
    </>
  );
}

export default Home;