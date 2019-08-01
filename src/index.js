import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import printMe from './hmrTest.js';
import * as serviceWorker from './serviceWorker';
 if (module.hot) {
    module.hot.accept('./hmrTest.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
