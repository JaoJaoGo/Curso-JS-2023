import React, { Component } from "react";

class Saudacao extends Component {
    state = {
        saudacao: this.props.saudacao,
        nome: this.props.nome
    }

    constructor(props) {
        super(props);

        /*this.state = {
            saudacao: this.props.saudacao,
            nome: this.props.nome
        }*/

        this.setSaudacao = this.setSaudacao.bind(this);
    }

    setSaudacao(e) {
        this.setState({ saudacao: e.target.value })
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const {saudacao, nome } = this.state;

        return (
            <div>
                <h1>{saudacao} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Saudação..." value={saudacao} onChange={this.setSaudacao} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}

export default Saudacao;