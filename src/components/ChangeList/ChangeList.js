import React, { Component } from 'react';
import ChangeItem from '../ChangeItem/ChangeItem';

class ChangeList extends Component {

  state = {
    total: 0
  }

  addChange = () =>{
    let amount = 0;
    amount += this.props.list[0].quantity * .01
    amount += this.props.list[1].quantity * .05
    amount += this.props.list[2].quantity * .1
    amount += this.props.list[3].quantity * .25
    amount += this.props.list[4].quantity * 1
    amount += this.props.list[5].quantity * 5
    amount += this.props.list[6].quantity * 10
    amount += this.props.list[7].quantity * 20
    this.setState({
      total: amount.toFixed(2)
    })
  }

  displayTotal = (event) =>{
    event.preventDefault();
    this.addChange();
    this.props.resetTotal();
  }

  render(){
    return (
      <>
        <form onSubmit={(event)=>this.displayTotal(event)}>
          <div className="main-div">
            {this.props.list.map((change, i)=>
              <ChangeItem change={change} key={i} i={i} addChange={this.props.addChange} />
            )}
          </div>
          <button type="submit">Add My Change!</button>
        </form>
        <p>I have ${this.state.total}</p>
      </>
    )
  }
}

export default ChangeList;