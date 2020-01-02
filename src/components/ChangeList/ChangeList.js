import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChangeList extends Component {

  state = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
    oneDollar: 0,
    fiveDollar: 0,
    tenDollar: 0,
    twentyDollar: 0,
    total: 0
  }

  componentDidMount(){
    this.props.dispatch({type: `GET_CHANGE`});
  }

  // Add all change together, fix to second decimal
  addChange = () => {
    let amount = 0;
    // amount += this.props.reduxState[0].quantity * .01
    // amount += this.props.reduxState[1].quantity * .05
    // amount += this.props.reduxState[2].quantity * .1
    // amount += this.props.reduxState[3].quantity * .25
    // amount += this.props.reduxState[4].quantity * 1
    // amount += this.props.reduxState[5].quantity * 5
    // amount += this.props.reduxState[6].quantity * 10
    // amount += this.props.reduxState[7].quantity * 20
    
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

  // Dispatch individual change to Saga
  // addQty = (event, id, name) => {
  //   event.preventDefault();
  //   this.sendChange(id, name);
  // }

  // Display total change, reset all input values
  displayTotal = (event) => {
    event.preventDefault();
    this.addChange();
    // this.props.dispatch({type: `RESET_ALL_QTY`});
  }

  // Reset coin/bill input values, calculate total
  resetInputsAndCalculateTotal = (amount) => {
    this.setState({
      penny: 0,
      nickel: 0,
      dime: 0,
      quarter: 0,
      oneDollar: 0,
      fiveDollar: 0,
      tenDollar: 0,
      twentyDollar: 0,
      total: amount.toFixed(2)
    });
  }

  // Dispatch each update to database
  // sendChange = (id, name) => {
  //   let dataToSend = {id: id, qty: this.state[name]};
  //   this.props.dispatch({type: `UPDATE_CHANGE`, payload: dataToSend});
  // }

  // Set state to current input value
  setChange = (event, name) => {
    if(event.target.value < 0 || !event.target.value){
      event.target.value = 0;
    }
    else if(event.target.value > 99){
      event.target.value = 99;
    }
    this.setState({
      [name]: +event.target.value,
      lastChanged: name
    });
  }

  render(){
    return (
      <>
        <form onSubmit={(event)=>this.displayTotal(event)}>
          <div className="main-div">
            {this.props.reduxState.map((change, i)=>
              <div key={i}>
                <div className="row">
                  <div className="dbl-col">
                    <div className={change.class} style={{backgroundImage: `url(${change.path})`}}></div>
                  </div>
                  <div className="col">
                    <input className="inputs" type="number" onChange={(event)=>this.setChange(event, change.name)} value={this.state[change.name]} />
                  </div>
                  {/* <div className="col">
                    <button onClick={(event)=>this.addQty(event, change.id, change.name)}>Add to Total</button>
                  </div> */}
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

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.changeReducer
});

export default connect(putReduxStateOnProps)(ChangeList);