import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './Components/TableComponent/table';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>        
         <Table className = 'Container'/>                 
      </div>      
    );
  }
}

export default App;
