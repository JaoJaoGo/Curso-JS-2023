import React, { Fragment } from 'react';

const BomDia = props =>
    // React.Fragment é usado para colocar mais de 1 tag sem precisar usar uma <div>, outra forma, seria colocar as tags em um
    // array, ficando:
    // [ 
    //      <h1 key = 'h1'>Bom doa {props.nome}!</h1>,
    //      <h2 key = 'h2'>Até breve!</h2>
    // ]
    // Não é obrigatório, mas é bom usar key (com valores diferentes pra cada tag) para facilitar na atualização de valores 
    // das tags.
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

export default BomDia;