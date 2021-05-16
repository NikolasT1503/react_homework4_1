import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import { Button } from "antd";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    if (this.state.visibility) {
      return (
        <div className="App">
          <div>
            <h3>Now you see me</h3>
            <Button type="primary" size="large" onClick={this.handleClick}>
              Click
            </Button>
          </div>
          <br />
          <div>
            <Button type="primary" size="large" shape="round" onClick={this.increment}>
              Inc
            </Button>
            <Button type="primary" size="large" shape="round" onClick={this.decrement}>
              Dec
            </Button>
            <Button type="primary" size="large" shape="round" onClick={this.reset}>
              Reset
            </Button>
            <h1>Current: {this.state.count}</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Button type="primary" size="large" onClick={this.handleClick}>
            Click
          </Button>
        </div>
      );
    }
  }
}

export default App;
