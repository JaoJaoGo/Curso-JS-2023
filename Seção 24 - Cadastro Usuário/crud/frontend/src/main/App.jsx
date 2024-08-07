import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Router from './Router';
import Footer from '../components/template/Footer';

const App = props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;