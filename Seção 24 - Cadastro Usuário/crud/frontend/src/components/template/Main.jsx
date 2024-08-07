import React from 'react';
import Header from './Header';

import './Main.css';

const Main = props => {
    return (
        <React.Fragment>
            <Header {...props} />
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main;