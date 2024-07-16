import React from 'react';
import Link from "next/link";

import styles from '../styles/Layout.module.css';

function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1 className='titulo'>{props.titulo}</h1>
                <Link href='/'>Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;