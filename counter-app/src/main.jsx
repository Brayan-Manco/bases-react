import React from 'react'
import ReactDOM from 'react-dom/client';

import './style.css';

import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';

// import { HelloWorldApp } from './HelloWorldApp'; './HelloWorldApp'


// REnderizamo la apliacación para usar react
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={2}/> */}
        <FirstApp title='Hola, soy Víctor' subTitle='Soy un subtitulo' />
    </React.StrictMode>
)