function Cabecalho(props) {
    return (
        <header>
            <h1>Fundamentos de Next.js & React</h1>
            <h2>Olá, {props.nome ? props.nome : 'Usuário'}!</h2>
        </header>
    )
}

export default Cabecalho;