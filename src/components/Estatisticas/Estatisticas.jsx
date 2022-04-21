import boy from '../../assets/images/boy.svg';
import aumento from '../../assets/icons/aumento.svg';
import crianca from '../../assets/icons/criança.svg';
import desemprego from '../../assets/icons/desemprego.svg';
import noSchool from '../../assets/icons/no-school.svg';
import * as S from './Estatisticas.style';
import { useState } from 'react';

const Estatisticas = () => {

    const [click, setClick] = useState(false)
        
    return (
        <>
        <S.Text><p className='titulo'>Alguns números sobre esse assunto</p></S.Text>
        <S.Container>
            <S.Image><img src={boy} className="imagemDesktop" /></S.Image>
            <S.Text>
                <div className='contemInfo'>
                    <div className='info'>
                        <p className='porcentagem'>76,7 milhões</p>
                        <p className='descricao'>De jovens desempregados no MUNDO<br /><span className='fonte'>Fonte: (Pesquisa) Todos Pela Educação</span></p>
                    </div>
                    <img src={boy} className="imagemCelular" />
                </div>
                <div className='cards'>
                    <S.Card click={click} onClick={() => setClick(!click)}>
                        <div className='title'>
                            <img src={aumento} className="aumento"/>
                            <p className='numeroCard'>171,1%</p>
                        </div>
                        <div className='dados'>
                            <p className='descricaoCard'>Foi o aumento da evasão  escolar comparado com 2019</p>
                            <p className='girado'>Fonte: (Pesquisa) IBGE</p>
                        </div>
                    </S.Card>
                    <S.Card click={click} onClick={() => setClick(!click)}>
                        <div className='title'>
                            <img src={crianca} className="crianca"/>
                            <p className='numeroCard'>244 mil</p>
                        </div>
                        <div className='dados'>
                            <p className='descricaoCard'>Crianças entre 6 e 14 estão fora das escolas no Brasil</p>
                            <p className='girado'>Fonte: (Pesquisa) Todos Pela Educação</p>
                        </div>
                    </S.Card>
                    <S.Card click={click} onClick={() => setClick(!click)}>
                        <div className='title'>
                            <img src={noSchool} className="noSchool"/>
                            <p className='numeroCard'>407 mil</p>
                        </div>
                        <div className='dados'>
                            <p className='descricaoCard'>Jovens deixam a escola sem concluir o ensino médio</p>
                            <p className='girado'>Fonte: (Pesquisa) Todos Pela Educação</p>
                        </div>
                    </S.Card>
                    <S.Card click={click} onClick={() => setClick(!click)}>
                        <div className='title'>
                            <img src={desemprego} className="desemprego"/>
                            <p className='numeroCard'>46,3%</p>
                        </div>
                        <div className='dados'>
                            <p className='descricaoCard'>Entre os mais jovens encontram-se desempregados</p>
                            <p className='girado'>Fonte: (Pesquisa) Todos Pela Educação</p>
                        </div>
                    </S.Card>
                </div>
            </S.Text>
        </S.Container>
        </>
    )
}
       
export default Estatisticas;