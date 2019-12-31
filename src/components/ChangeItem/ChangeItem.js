import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChangeItem extends Component {

  state = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
    oneDollar: 0,
    fiveDollar: 0,
    tenDollar: 0,
    twentyDollar: 0,
  }

  componentDidMount(){
    this.props.dispatch({type: `GET_CHANGE`});
  }

  addQty = (event, id) => {
    event.preventDefault();
    this.sendChange(id);
  }

  // Set state to current input value
  setChange = (event, name) => {
    if(event.target.value < 0 || isNaN(event.target.value)){ // isNan still allows non-number inputs - fix this
      event.target.value = 0;
    }
    else if(event.target.value > 99){
      event.target.value = 99;
    }
    this.setState({
      [name]: event.target.value,
      lastChanged: name
    });
  }

  // Dispatch each update to database
  sendChange = (id) => {
    let dataToSend = {id: id, qty: this.state[this.state.lastChanged]};
    this.props.dispatch({type: `UPDATE_CHANGE`, payload: dataToSend});
  }

  // Reset individual input value
  reset = (event, id) => {
    event.preventDefault();
    this.props.dispatch({type: `RESET_QTY`, payload: id});
  }

  render(){
    return(
      <>
      {JSON.stringify(this.state)}

        {this.props.reduxState.map((change, i)=>
          <div key={i}>
            <div className="row">
              <div className="dbl-col">
                <div className={change.class} style={{backgroundImage: `url(${change.path})`}}></div>
              </div>
              <div className="col">
                <input className="inputs" type="number" onChange={(event)=>this.setChange(event, change.name)} value={this.state[change.name]} />
              </div>
              <div className="col">
                <button onClick={(event)=>this.addQty(event, change.id)}>Add to Total</button>
              </div>
              <div className="col">
                <button onClick={(event)=>this.reset(event, change.id)}>Reset</button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.changeReducer
});

export default connect(putReduxStateOnProps)(ChangeItem);