import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasComponent from "./Components/Canvas/CanvasComponent";

class App extends Component {
  render() {
    return (
        <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Drawboard</h1>
        </header>
      </div>
            <CanvasComponent/>
        </div>
    );
  }
}

export default App;
