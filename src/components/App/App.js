import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import DataEntry from '../DataEntry/DataEntry';

class App extends Component {
  render(){
    return (
      <>
        <div className="App">
          <Header />
          <DataEntry />
        </div>
      </>
    )
  }
}

export default App;
