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

  addChange = (name) =>{
    axios.post(`/change/${name}`)
    .then(response=>{
      this.getChange();
    }).catch(error=>{
    alert(`something went wrong`);
    console.log(error);
    });
  }

  getChange = () =>{
    axios.get(`/change`)
    .then(response=>{
      this.setState({
        changeList: response.data
      });
      console.log('changeList:', this.state.changeList);
    }).catch(error=>{
    alert(`something went wrong`);
    console.log(error);
    });
  }

  resetTotal = () =>{
    console.log('in reset');
    axios.put(`/change/reset`)
    .then(response=>{
      this.getChange();
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
          <ChangeList list={this.state.changeList} addChange={this.addChange} resetTotal={this.resetTotal} />
        </div>
      </>
    )
  }
}

export default App;
