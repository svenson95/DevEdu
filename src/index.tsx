import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {setupConfig} from "@ionic/react";
import AuthProvider from './app/context/auth.context';

setupConfig({
    rippleEffect: false,
});

ReactDOM.render(<AuthProvider><App/></AuthProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
