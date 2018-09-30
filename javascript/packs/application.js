import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'wold'], ' ');

  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(component());
});
