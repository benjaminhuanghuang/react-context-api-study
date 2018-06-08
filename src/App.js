import React, { Component } from 'react';
import './App.css';

import Red from './demo/RGB';
import Red2 from './demo/RGBContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Red />
        <Red2 />
      </div>
    );
  }
}

export default App;
