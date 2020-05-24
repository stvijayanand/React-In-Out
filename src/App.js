import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  render() {
    return (
      <div className="App">
        

      <UserOutput username='vijay'></UserOutput>
      <UserOutput username='david'></UserOutput>
      <UserOutput username='peter'></UserOutput>
      </div>
    );
  }
}

export default App;
