import React, {Component} from 'react';
import logo from '../Picture/logo.svg';
import Navbar from './navbar'
import Header from './header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>

      </div>
    );
  }
}

export default App;
