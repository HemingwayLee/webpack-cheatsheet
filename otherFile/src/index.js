import {foo} from './func';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, ' + foo();

  return element;
}

document.body.appendChild(component());

