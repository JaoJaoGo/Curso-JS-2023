import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Refatorar em casa! (Transformar em um componente para criar os links) */}
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users"></i> Usuários
                </Link>
            </nav>
        </aside>
    )
}

export default Nav;