import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from '../containers/App.js';
import store from './store.js';

ReactDOM.render(<App store={store} />, document.getElementById('app'));

// ReactDOM.render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>),
// document.getElementById('app')
// );
