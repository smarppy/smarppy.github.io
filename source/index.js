/* eslint-disable import/first, import/no-extraneous-dependencies  */

document.documentElement.setAttribute('data-browser', navigator.userAgent);
window.IS_IE = /(Trident\/|MSIE)/.test(navigator.userAgent);

// require('moment/locale/pt-br');
require('./src/styles');

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./src/App').default;
const serviceWorker = require('./serviceWorker');

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

serviceWorker.register();
