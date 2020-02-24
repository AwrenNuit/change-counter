import React from 'react';
import '../App/App.css';
import ChangeList from '../ChangeList/ChangeList';
import Header from '../Header/Header';

const App = () => {

  return (
    <>
      <div className="App">
        <Header />
        <ChangeList />
      </div>
    </>
  );
}

export default App;