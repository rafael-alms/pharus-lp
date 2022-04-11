import * as S from './Inicio.style';
import tela1 from '../../assets/images/tela1.png';

const Inicio = () => {

    return (
        <S.Container>
            <S.Imagem>
                <div className="telas">
                    <img src={tela1} alt="tela1" />
                </div>
            </S.Imagem>
            <div className='descricao'>
                <p className='titulo'>Subtítulo</p>
                <p className='conteudo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum purus quis turpis varius viverra. Donec vulputate tincidunt sollicitudin. Vivamus in turpis dignissim, tempor massa in, viverra enim. Suspendisse potenti. In vitae dolor a felis finibus bibendum molestie nec sem. Ut eu condimentum ipsum. Nam et est ac est auctor varius.</p>
                <p className='conteudo'>Sed maximus nisi at erat rutrum, eu venenatis ligula elementum. Maecenas ultrices, purus eget cursus lacinia, libero lorem pellentesque lorem, ut posuere erat justo quis arcu. Proin odio erat, varius nec hendrerit nec, pellentesque ac neque. Proin tincidunt volutpat turpis, in feugiat lacus condimentum et.</p>
                <button>Saiba mais</button>
            </div>
        </S.Container>
    )
}
       
export default Inicio;