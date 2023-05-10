import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App tooltipId={'tooltip'}>
      <button id="button1">First button </button>
      <button id="button2">Second button </button>
    </App>
  </StrictMode>
);

// setTImeout(() => {
//   document.getElementById("button2").click();

//   setTimeout(() => {
//     console.log(document.body.innerHTML);
//   }, 300);
// }, 300 );
