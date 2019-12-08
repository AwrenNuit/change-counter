import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import Header from '../Header/Header';
import DataEntry from '../DataEntry/DataEntry';

class App extends Component {

  state = {
    changeList: []
  }

  componentDidMount = () =>{
    this.getChange();
  }

  getChange = () =>{
    axios.get(`/change`)
    .then(response=>{
      this.setState({
        changeList: response.data
      });
    }).catch(error=>{
    alert(`something went wrong`);
    console.log(error);
    });
  }

  render(){
    return (
      <>
        <div className="App">
          <Header />
          <DataEntry list={this.state.changeList} />
        </div>
      </>
    )
  }
}

export default App;
