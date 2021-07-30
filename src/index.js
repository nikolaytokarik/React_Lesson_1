import React from 'react';
import ReactDOM from 'react-dom';

import { App, Message } from './App';

const someText = { message: "hello, bro" }

ReactDOM.render(
  <React.StrictMode>
    <App ><p><Message someText={someText} /></p></App>
  </React.StrictMode>,
  document.getElementById('root')
);

