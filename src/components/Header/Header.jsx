import logoBranca from '../../assets/icons/logo-large-white.svg';
import logoPreta from '../../assets/icons/logo-large-black.svg';
import * as S from './Header.style';
import Menu from '../Menu/Menu';

const Header = () => {
        
    return (
        <S.Container>
            <S.Logo>
                <div className="logoBranca">
                    <img src={logoBranca} alt="pharus" />
                </div>
                <div className="logoPreta">
                    <img src={logoPreta} alt="pharus" />
                </div>
            </S.Logo>
            <Menu />
        </S.Container>
    )
}
       
export default Header;