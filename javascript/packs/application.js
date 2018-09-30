import _ from 'lodash';
import './style.css';

import component from './component';

let element = component();

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(element);
});

if (module.hot) {
  module.hot.accept('./component.js', () => {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
