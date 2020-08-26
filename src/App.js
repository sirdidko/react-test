import React, { Component } from 'react';
import Code from './Code';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class ClassApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
      name: 'John'
    }

   // console.log(this.props);
  }



render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Counter counter={0} /><b>src/App.js</b> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code>Learn React {this.props.blabla}11</Code>
        </a>
      </header>
    </div>
  );
}



}

export default ClassApp;
