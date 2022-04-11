import logo from '../../assets/icons/logoPharus.svg';
import * as S from './Header.style';
import Menu from '../Menu/Menu';

const Header = () => {
        
    return (
        <S.Container>
            <S.Logo>
                <div className="logo">
                    <img src={logo} alt="pharus" />
                </div>
            </S.Logo>
            <Menu />
        </S.Container>
    )
}
       
export default Header;