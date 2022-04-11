import * as S from './Menu.style';
import { useState } from 'react';

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <S.Menu>
            <S.Hamburguer open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </S.Hamburguer>
            <S.Ul open={open}>
                <li>Menu</li>
                <li>Página inicial</li>
                <li>Saiba mais</li>
                <li>Sobre nós</li>
                <li>Newsletter</li>
            </S.Ul>
        </S.Menu>
    )
}
       
export default Menu;