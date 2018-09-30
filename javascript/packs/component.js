import React from 'react';
import { hot } from 'react-hot-loader';

const Component = props => (
  <div>Hola {props.name}</div>
);

Component.defaultProps = {
  name: 'world'
};

export default hot(module)(Component);
