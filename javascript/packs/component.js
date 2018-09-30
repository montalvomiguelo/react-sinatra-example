function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'world'], ' ');

  return element;
}

export default component;
