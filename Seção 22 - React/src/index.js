import React from 'react';
import ReactDOM from 'react-dom/client';

// import Multiplos, { BoaTarde, BoaNoite } from './componentes/Multiplos';
// import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BoaTarde nome="João" />
        <BoaNoite mensagem="tudo bem?" />
        <Multiplos nome='Bia' mensagem='como vai?' /> */}

        {/* <Saudacao saudacao="Bom dia" nome="João" /> */}

        <Pai nome="Áthila" sobrenome="Afonso">
            {/* Como passar os componentes filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho sobrenome="Júnior" />
        </Pai>
    </React.StrictMode>
);