import React from 'react';
import ReactDom from 'react-dom/client'
// import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { App } from './App'
import './index.css'


ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title='titulo' />
    </React.StrictMode>
)