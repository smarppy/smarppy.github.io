/* eslint-disable import/no-extraneous-dependencies  */

require('@babel/polyfill');
require('./src/styles');

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./src/App').default;
// const serviceWorker = require('./serviceWorker');

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

// serviceWorker.register();
