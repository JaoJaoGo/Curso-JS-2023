import { useState } from "react";
import Layout from "../components/Layout";

import styles from '../styles/Integracao_1.module.css';

const Integracao = () => {
    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCliente(dados);
    }

    return (
        <Layout className={styles.layout} titulo='Integração com API #1'>
            <div className={styles.card}>
                <div className={styles.inputs}>
                    <input type="number" className={styles.inpute} value={codigo} onChange={e => setCodigo(e.target.value)} />
                    <button className={styles.botao} onClick={obterCliente}>Obter Cliente</button>
                </div>
                <ul className={styles.lista}>
                    <hr />
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>E-mail: {cliente.email}</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Integracao;