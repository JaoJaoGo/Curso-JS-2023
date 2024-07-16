import { useState } from 'react';
import Layout from '../components/Layout';

import styles from'../styles/Estado.module.css'

function Estado() {
    const [num, setNum] = useState(0);

    function incrementar() {
        setNum(num + 1);
    }

    return (
        <Layout className={styles.layout} titulo='Componente com Estado'>
            <div className={styles.card}>
                <p>{num}</p>
                <button className={styles.botao} onClick={incrementar}>Incrementar</button>
            </div>
        </Layout>
    )
}

export default Estado;