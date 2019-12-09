import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import Header from '../Header/Header';
import ChangeList from '../ChangeList/ChangeList';

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

  showChange = () =>{

  }

  render(){
    return (
      <>
        <div className="App">
          <Header />
          <ChangeList list={this.state.changeList} showChange={this.showChange} />
        </div>
      </>
    )
  }
}

export default App;
