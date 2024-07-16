import Link from 'next/link';

import styles from '../styles/Navegador.module.css';

function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: props.corFundo ?  props.corFundo : 'dodgerblue',

            }}>
                {props.texto}
            </div>
        </Link>
    )
}

export default Navegador;