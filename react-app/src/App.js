import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SayHello(){
  return <h1>Hello</h1>
}

class App extends Component {
  render() {
    return (
      <div className="name">
      <SayHello>Hello</SayHello>
      </div>
    );
  }
}

export default App;
