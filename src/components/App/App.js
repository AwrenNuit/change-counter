import React, { Component } from 'react';
import '../App/App.css';
import ChangeList from '../ChangeList/ChangeList';
import Header from '../Header/Header';

class App extends Component {

  render(){
    return (
      <>
        <div className="App">
          <Header />
          <ChangeList />
        </div>
      </>
    )
  }
}

export default App;
