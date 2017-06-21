import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<Application/>, document.getElementById('root'));
registerServiceWorker();
