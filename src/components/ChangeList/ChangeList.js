import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChangeList extends Component {

  state = {
    penny: '',
    nickel: '',
    dime: '',
    quarter: '',
    oneDollar: '',
    fiveDollar: '',
    tenDollar: '',
    twentyDollar: '',
    total: 0
  }

  componentDidMount(){
    this.props.dispatch({type: `GET_CHANGE`});
  }

  // Add all change together, fix to second decimal, reset state values
  addChange = () => {
    let amount = 0;    
    amount += this.state.penny * .01
    amount += this.state.nickel * .05
    amount += this.state.dime * .1
    amount += this.state.quarter * .25
    amount += this.state.oneDollar * 1
    amount += this.state.fiveDollar * 5
    amount += this.state.tenDollar * 10
    amount += this.state.twentyDollar * 20
    this.resetInputsAndCalculateTotal(amount);
  }

  // Display total change
  displayTotal = e => {
    e.preventDefault();
    this.addChange();
  }

  // Reset coin/bill input values, calculate total
  resetInputsAndCalculateTotal = amount => {
    this.setState({
      penny: '',
      nickel: '',
      dime: '',
      quarter: '',
      oneDollar: '',
      fiveDollar: '',
      tenDollar: '',
      twentyDollar: '',
      total: amount.toFixed(2)
    });
  }

  // Set state to current input value
  setChange = (e, name) => {
    if(e.target.value < 0){
      e.target.value = 0;
    }
    else if(e.target.value > 99){
      e.target.value = 99;
    }
    this.setState({
      [name]: +e.target.value
    });
  }

  render(){
    return (
      <>
        <form onSubmit={this.displayTotal}>
          <div className="main-div">
            {this.props.change.map(change=>
              <div key={change.id}>
                <div className="row">
                  <div className="dbl-col">
                    <div className={change.class} style={{backgroundImage: `url(${change.path})`}}></div>
                  </div>
                  <div className="col">
                    <input className="inputs" type="number" onChange={(e)=>this.setChange(e, change.name)} value={this.state[change.name]} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button type="submit">Add My Change!</button>
        </form>
        <p className="total">I have ${this.state.total}</p>
      </>
    )
  }
}

const mapRedux = state => ({
  change: state.changeReducer
});

export default connect(mapRedux)(ChangeList);