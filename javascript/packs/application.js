import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});
