import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Component from './Component';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Component name="React" />,
    document.body.appendChild(document.createElement('div'))
  );
});
