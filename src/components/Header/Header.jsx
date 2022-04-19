import logoRoxa from '../../assets/icons/logo-large-purple.svg';
import * as S from './Header.style';
import Menu from '../Menu/Menu';

const Header = () => {
        
    return (
        <S.Container>
            <S.Logo>
                <div className="logoRoxa">
                    <img src={logoRoxa} alt="pharus" />
                </div>
            </S.Logo>
            <Menu />
        </S.Container>
    )
}
       
export default Header;