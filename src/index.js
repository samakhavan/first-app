import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();