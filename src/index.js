import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { unregister as unregisterServiceWorker } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

unregisterServiceWorker();
