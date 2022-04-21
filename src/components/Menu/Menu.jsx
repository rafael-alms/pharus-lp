import * as S from './Menu.style';
import { useState } from 'react';
import React from 'react';

const Menu = () => {

    const [open, setOpen] = useState(false)

    const handleScrollClick = () => {
        const section = document.querySelector('#statistics')
        section.scrollIntoView({behavior: 'smooth', block: 'start'})
        setOpen(!open)
    }

    return (
        <S.Menu>
            <S.Hamburguer open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </S.Hamburguer>
            <S.Ul open={open}>
                <li>Menu</li>
                <li onClick={handleScrollClick}>Estatísticas</li>
                <li>Saiba mais</li>
                <li>Sobre nós</li>
                <li>Newsletter</li>
            </S.Ul>
        </S.Menu>
    )
}
       
export default Menu;