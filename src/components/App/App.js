import React, { Component } from 'react';
import '../App/App.css';
import ChangeList from '../ChangeList/ChangeList';

class App extends Component {

  render(){
    return (
      <>
        <div className="App">
          <ChangeList />
        </div>
      </>
    )
  }
}

export default App;
