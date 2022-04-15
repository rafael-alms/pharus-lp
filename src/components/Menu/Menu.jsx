import * as S from './Menu.style';
import { useState } from 'react';
import React from 'react';
//import { Link } from 'react-router-dom'
//import { Link, animateScroll as scroll } from "react-scroll";
//import Scroll from 'react-scroll'

const Menu = () => {

    const [open, setOpen] = useState(false)

    //const ScrollLink = Scroll.ScrollLink

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
                {/* <li><ScrollLink to="estatisticas" spy={true} smooth={true} duration={500}>Saiba mais</ScrollLink></li> */}
                <li>Sobre nós</li>
                <li>Newsletter</li>
            </S.Ul>
        </S.Menu>
    )
}
       
export default Menu;