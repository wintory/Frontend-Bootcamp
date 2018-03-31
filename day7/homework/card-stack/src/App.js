import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
const shuffle = require("shuffle-array");
class App extends Component {
  color = ["red", "blue", "green", "purple", "pink"];
  newColor = [
    ...this.color,
    ...this.color
  ];
  // create Color
  state = {
    color: [...this.newColor]
  };
  //create State
  handleClick = () => {
    shuffle(this.newColor);
    this.setState({
      color: [...this.newColor]
    });
  };

  componentDidMount() {
    shuffle(this.newColor);
    this.setState({
      color: [...this.newColor]
    });
  }

  //onClick event
  render() {
    return (
      <div className="App">
        <br/>
        <h1>Hw7-1</h1>
        <div className="container">
          <br/>
          <br/>
          <div className="row">
            {this
              .state
              .color
              .map((item, index) => {
                return <Card key={index} color={item}/>;
              })}
          </div>
          <button type="text" onClick={this.handleClick}>
            Shuffle
          </button>
        </div>
      </div>
    );
  }
}

export default App;
