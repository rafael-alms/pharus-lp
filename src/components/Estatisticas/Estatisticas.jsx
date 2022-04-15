import boy from '../../assets/images/boy.png';
import boybench from '../../assets/images/boybench.png';
import boneco from '../../assets/images/boneco.svg';
import * as S from './Estatisticas.style';

const Estatisticas = () => {
        
    return (
        <S.Container>
            <S.Image><img src={boy} className="imagemDesktop" /></S.Image>
            <S.Text>
                <p className='titulo'>Estatísticas</p>
                <div className='contemInfo'>
                    <div className='info'>
                        <p className='porcentagem'>80%</p>
                        <p className='descricao'>Dos jovens abandonam o ensino médio para procurar emprego</p>
                    </div>
                    <img src={boybench} className="imagemCelular" />
                </div>
                <div className='cards'>
                    <S.Card>
                        <img src={boneco} />
                        <div className='dados'>
                            <p className='numeroCard'>45%</p>
                            <p className='descricaoCard'>Estudam em escolas públicas</p>
                        </div>
                    </S.Card>
                    <S.Card>
                        <img src={boneco} />
                        <div className='dados'>
                            <p className='numeroCard'>35%</p>
                            <p className='descricaoCard'>Estudam em escolas públicas</p>
                        </div>
                    </S.Card>
                    <S.Card>
                        <img src={boneco} />
                        <div className='dados'>
                            <p className='numeroCard'>1.500</p>
                            <p className='descricaoCard'>Estudam em escolas públicas</p>
                        </div>
                    </S.Card>
                    <S.Card>
                        <img src={boneco} />
                        <div className='dados'>
                            <p className='numeroCard'>14%</p>
                            <p className='descricaoCard'>Estudam em escolas públicas</p>
                        </div>
                    </S.Card>
                </div>
            </S.Text>
        </S.Container>
    )
}
       
export default Estatisticas;