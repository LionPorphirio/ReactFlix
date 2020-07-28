import React from 'react';
import Lionflix from '../../assets/img/Lionflix.png';
import './Menu.css'
import Button from './components';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Lionflix} alt="AluraFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                novo video
            </Button>
        </nav>
    );
}

export default Menu;