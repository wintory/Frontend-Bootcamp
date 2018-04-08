import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, NavLink } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="./about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./job" className="nav-link">Job</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./portfolio" className="nav-link">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./skill" className="nav-link">Skill</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./cardstack" className="nav-link">Card stack</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./bitcoin" className="nav-link">bitcoin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./recipe" className="nav-link">Recipe</NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default App;
