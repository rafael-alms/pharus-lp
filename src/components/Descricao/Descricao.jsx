import image from '../../assets/images/image.png';
import * as S from './Descricao.style';

const Descricao = () => {
        
    return (
        <S.Container>
            <S.Image>
                <img src={image} alt="image" />
            </S.Image>
            <S.Text>
                <p className='titulo'>Descrição</p>
                <p className='conteudo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum purus quis turpis varius viverra. Donec vulputate tincidunt sollicitudin. Vivamus in turpis dignissim, tempor massa in, viverra enim. Suspendisse potenti. In vitae dolor a felis finibus bibendum molestie nec sem. Ut eu condimentum ipsum. Nam et est ac est auctor varius.</p>
                <p className='conteudo'>Sed maximus nisi at erat rutrum, eu venenatis ligula elementum. Maecenas ultrices, purus eget cursus lacinia, libero lorem pellentesque lorem, ut posuere erat justo quis arcu. Proin odio erat, varius nec hendrerit nec, pellentesque ac neque. Proin tincidunt volutpat turpis, in feugiat lacus condimentum et. Aenean fringilla erat quis felis volutpat, eu ultrices lacus pellentesque. Quisque ac orci in enim tempus accumsan. Nunc placerat ultrices lacinia. Vivamus nisl lorem, congue commodo velit a, feugiat ultricies augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in justo tortor. Nulla nec ipsum nisl. Phasellus nulla quam, ultricies id arcu et, aliquam porta magna. Phasellus ac ex felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec metus eu justo semper mollis.</p>
            </S.Text>
        </S.Container>
    )
}
       
export default Descricao;