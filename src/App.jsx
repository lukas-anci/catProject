import React, { Component } from 'react';

import './App.css';
import Categories from './components/Categories';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Categories />
      </div>
    );
  }
}

export default App;
