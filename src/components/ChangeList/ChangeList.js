import React, { Component } from 'react';
import ChangeItem from '../ChangeItem/ChangeItem';
import {connect} from 'react-redux';

class ChangereduxState extends Component {

  state = {
    total: 0
  }

  // Add all change together, fix to second decimal
  addChange = () =>{
    let amount = 0;
    amount += this.props.reduxState[0].quantity * .01
    amount += this.props.reduxState[1].quantity * .05
    amount += this.props.reduxState[2].quantity * .1
    amount += this.props.reduxState[3].quantity * .25
    amount += this.props.reduxState[4].quantity * 1
    amount += this.props.reduxState[5].quantity * 5
    amount += this.props.reduxState[6].quantity * 10
    amount += this.props.reduxState[7].quantity * 20
    this.setState({
      total: amount.toFixed(2)
    })
  }

  // Display total change, reset all input values
  displayTotal = (event) =>{
    event.preventDefault();
    this.addChange();
    this.props.dispatch({type: `RESET_ALL_QTY`});
  }

  render(){
    return (
      <>
        <form onSubmit={(event)=>this.displayTotal(event)}>
          <div className="main-div">
            <ChangeItem />
          </div>
          <button type="submit">Add My Change!</button>
        </form>
        <p>I have ${this.state.total}</p>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.changeReducer
});

export default connect(putReduxStateOnProps)(ChangereduxState);