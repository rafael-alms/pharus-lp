import profile from '../../assets/images/profile.svg';
import tres from '../../assets/images/3estrelas.svg';
import quatro from '../../assets/images/4estrelas.svg';
import cinco from '../../assets/images/5estrelas.svg';
import * as S from './Depoimentos.style';
import TinySlider from "tiny-slider-react";
//import 'tiny-slider/dist/tiny-slider.css';

const Depoimentos = () => {
        
    const settings = {
        lazyload: false,
        nav: true,
        mouseDrag: true,
        loop: false,
        items: 1,
        gutter: -200,
        controls: false,
        responsive: {
            420: {
                items: 2
            }
        }
    };

    // document.body.onresize = function() {
    //     if (document.body.clientWidth < 769) {
    //         var largura = window.screen.width;
    //     }
    // };

    const cardStyle = {
        //width: (window.screen.width > 768 ? "606px" : "252px"),
        //height: (window.screen.width > 768 ? "323px" : "405px"),
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
                    <img src={quatro} className="estrelas" />
                    <p className='depoimento'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim condimentum mi sed tempus. Donec eu erat ut erat iaculis mattis. Phasellus bibendum risus vel nibh euismod, et molestie sem malesuada. In dictum diam ut est tempus viverra. Morbi vestibulum viverra lorem, eu egestas leo maximus at. Sed lobortis quam at elit posuere blandit.</p>
                    <p className='identificacao'>FULANO DE TAL - ALUNO</p>
                </S.Card>
                <S.Card style={cardStyle}>
                    <img src={profile} className="profilePic" />
                    <img src={tres} className="estrelas" />
                    <p className='depoimento'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim condimentum mi sed tempus. Donec eu erat ut erat iaculis mattis. Phasellus bibendum risus vel nibh euismod, et molestie sem malesuada. In dictum diam ut est tempus viverra. Morbi vestibulum viverra lorem, eu egestas leo maximus at. Sed lobortis quam at elit posuere blandit.</p>
                    <p className='identificacao'>FULANO DE TAL - ALUNO</p>
                </S.Card>
                <S.Card style={cardStyle}>
                    <img src={profile} className="profilePic" />
                    <img src={cinco} className="estrelas" />
                    <p className='depoimento'>O Pharus me ajudou a selecionar jovens promissores no ensino médio, e com isso consegui atrair talentos e desenvolvê-los para deixá-los capacitados para o mercado de trabalho, e ainda pudemos absorver os destaques.</p>
                    <p className='identificacao'>Paulo Carvalho, diretor da Medal Tecnologia</p>
                </S.Card>
            </TinySlider>
        </S.Container>
    )
}
       
export default Depoimentos;