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
    twentyDollar: 0
  }

  UNSAFE_componentWillMount(){
    this.props.dispatch({type: `GET_CHANGE`});
  }

  componentDidUpdate(){
    this.sendChange();
  }

  // Set state to current input value
  setChange = (event, name) =>{
    this.setState({
      [name]: event.target.value
    });
  }

  // Dispatch each update to database
  sendChange = () =>{
    console.log('in sendChange with:', this.props.reduxState.name, this.state);
    let dataToSend = {name: this.props.reduxState.name, qty: this.state};
    console.log('dataToSend:', dataToSend);
    this.props.dispatch({type: `UPDATE_CHANGE`, payload: dataToSend});
  }

  // Reset individual input value
  reset = (event, id) =>{
    event.preventDefault();
    this.props.dispatch({type: `RESET_QTY`, payload: id});
  }

  render(){
    return(
      <>
      {JSON.stringify(this.state)}
      {JSON.stringify(this.props.reduxState)}

        {this.props.reduxState.map((change, i)=>
          <div key={i}>
            <div className="row">
              <div className="dbl-col">
                <div className={change.class} style={{backgroundImage: `url(${change.path})`}}></div>
              </div>
              <div className="col">
                <input className="inputs" type="number" min="0" max="99" onChange={(event)=>this.setChange(event, change.name)}  />
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