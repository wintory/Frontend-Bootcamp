import React, {Component} from 'react';
import logo from '../Picture/logo.svg';
import './App.css';
import Navbar from './navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <h2>Header</h2>
        </header>

      </div>
    );
  }
}

export default App;
