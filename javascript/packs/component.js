import React from 'react';

const Component = props => (
  <div>Hello {props.name}</div>
);

Component.defaultProps = {
  name: 'world'
};

export default Component;
