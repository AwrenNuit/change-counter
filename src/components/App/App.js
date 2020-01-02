import React, { Component } from 'react';
import '../App/App.css';
// import Header from '../Header/Header';
import ChangeList from '../ChangeList/ChangeList';

class App extends Component {

  render(){
    return (
      <>
        <div className="App">
          {/* <Header /> */}
          <ChangeList />
        </div>
      </>
    )
  }
}

export default App;
