import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
