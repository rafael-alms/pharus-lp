import profile from '../../assets/images/profile.svg';
import * as S from './Depoimentos.style';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import Instagram from '../../components/Instagram'

const Depoimentos = () => {
        
    const settings = {
        lazyload: false,
        nav: false,
        mouseDrag: true,
        loop: false,
        items: 1,
        gutter: -200,
        controls: false,
        autoKeys: false,
        controlsText: false,
        responsive: {
            0: {
                items: 1,
                fixedWidth: 500
            },
            769: {
                items: 2,
                fixedWidth: 900
            }
        }
    };

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px"
    };

    return (
        <S.Container>
            <p className='titulo'>Depoimentos</p>
            <TinySlider className="sliderStyle" settings={settings} >
                <S.Card style={cardStyle}>
                    <img src={profile} className="profilePic" />
                    <p className='depoimento'>Sou Diretora de uma escola e, recentemente, coloquei a tecnologia para nossos alunos - estamos recebendo vários elogios dos alunos e, também, dos respectivos responsáveis por eles.</p>
                    <p className='identificacao'>Joana Freitas, diretora escolar</p>
                </S.Card>
                <S.Card style={cardStyle}>
                    <img src={profile} className="profilePic" />
                    <p className='depoimento'>Quando o Pharus entrou na minha escola, fiquei super animado com tudo que estava vendo e como seria o futuro das minhas aulas; gosto muito de uma competição saudável - ainda mais quando é algo bom com um objetivo positivo.</p>
                    <p className='identificacao'>Anônimo - Aluno</p>
                </S.Card>
                <S.Card style={cardStyle}>
                    <img src={profile} className="profilePic" />
                    <p className='depoimento'>O Pharus me ajudou a selecionar jovens promissores no ensino médio, e com isso consegui atrair talentos e desenvolvê-los para deixá-los capacitados para o mercado de trabalho, e ainda pudemos absorver os destaques.</p>
                    <p className='identificacao'>Paulo Carvalho, diretor da Medal Tecnologia</p>
                </S.Card>
            </TinySlider>
            <Instagram />
        </S.Container>
    )
}
       
export default Depoimentos;