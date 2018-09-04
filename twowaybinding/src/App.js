import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: "Muhammad Ahmad"
  }

//This is one way of binding
//  changeName = () => {
//    this.setState({
//        name: "Muhammad Ahmad Waheed"
//    });
//    <button onClick={this.changeName}>Change State</button>
changeName = (newName) => {
  this.setState({
    name: newName
  })
}

changeNameInput = (event) => {
  this.setState({
    name: event.target.value
  })
}


  render() {
    return (
      <div className="App">
        <br /><br />
        <button onClick={() => this.changeName('Ahmad Salimi')}>Change State with Anon Function</button>
        <button onClick={this.changeName.bind(this, 'Muhammad Salimi')}>Change State with Binding</button>
        <br /><br />
        <input type="text" onChange={this.changeNameInput} value={this.state.name} />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;

//  value={this.state.name} This is two-way binding
