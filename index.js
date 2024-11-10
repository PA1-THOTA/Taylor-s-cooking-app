import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import {ContextProvider} from "./contextapi"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // context provider to make meals variable available globally
    <ContextProvider>
        {/* browserrouter to make the react application as a single page application */}
        <BrowserRouter>
        {/* wrapping app component so that it can utilize the properties of contextprovider and reactrouterdom */}
            <App />
        </BrowserRouter>
    </ContextProvider>
);

