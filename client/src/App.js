import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={password:[]}

  componentDidMount(){
    this.getShit()
  }
  getShit=()=>{
    fetch('/api')
    .then(res=>res.json()
    )
    .then(password=>this.setState({password})
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {passwords.map(key=>key)}
        </p>
      </div>
    );
  }
}

export default App;
