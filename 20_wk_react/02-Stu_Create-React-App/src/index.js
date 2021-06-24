// TODO: Add a comment giving a brief description of what React is
// React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook
// import React from 'react'; // no longer required with react 17+

// TODO: Add a comment that describes the difference between react and react-dom
// react-dom is the connection between the react VDOM and the  web DOM
// react-dom houses all the functionality (props, hooks, etc.)
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// Parses and renders the passed in react component  definition
ReactDOM.render(<App />, document.getElementById('root'));
