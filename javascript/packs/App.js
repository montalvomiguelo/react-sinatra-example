import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <Table
        headings={['id', 'name', 'year', 'color', 'pantone_value']}
        rows={this.state.products}
      />
    );
  }

  componentDidMount() {
    fetch('/products')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          products: responseData
        });
      })
      .catch(error => console.log('Error:', error));
  }
}

export default hot(module)(App);
