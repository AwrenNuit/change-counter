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
    }).catch(error=>{
    alert(`something went wrong`);
    console.log(error);
    });
  }

  resetCount = (id) =>{
    axios.put(`/change/reset/${id}`)
    .then(response=>{
      this.getChange();
    }).catch(error=>{
    alert(`something went wrong`);
    console.log(error);
    });
  }

  resetTotal = () =>{
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
          <ChangeList list={this.state.changeList} addChange={this.addChange} resetCount={this.resetCount} resetTotal={this.resetTotal} />
        </div>
      </>
    )
  }
}

export default App;
