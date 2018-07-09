import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Template from './layouts';

ReactDOM.render( <Template/> , document.getElementById('root'));
registerServiceWorker();
