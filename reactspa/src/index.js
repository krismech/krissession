import React from 'react';
import ReactDOM from 'react-dom';
import App from './rootcomponent/app.js'
import { HashRouter } from "react-router-dom"
import './style.css'

ReactDOM.render(
    <HashRouter>
        <App></App>
    </HashRouter>, document.getElementById('root'));

