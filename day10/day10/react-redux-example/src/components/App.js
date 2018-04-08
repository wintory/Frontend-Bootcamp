import React from 'react';
import './App.css';
import CounterContainer from '../containers/CounterContainer';
import ButtonContainer from '../containers/ButtonContainer';
import DecrementContainer from '../containers/DecrementContainer'
const App = () => (
  <div className="App">
    <CounterContainer />
    <ButtonContainer />
    <DecrementContainer />
  </div>
);

export default App;
