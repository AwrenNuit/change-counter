import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChangeItem extends Component {

  state = {
    qty: 0
  }

  setChange = (event, name) =>{
    this.setState({
      qty: event.target.value
    });
    this.sendChange(name);
  }

  sendChange = (name) =>{
    let dataToSend = {name: name, qty: this.state.qty};
    this.props.dispatch({type: `UPDATE_CHANGE`, payload: dataToSend});
  }

  reset = (event, id) =>{
    event.preventDefault();
    this.props.resetCount(id);
  }

  render(){
    return(
      <>
        {this.props.reduxState.map((change, i)=>
          <div key={i}>
            <div className="row">
              <div className="dbl-col">
                <div className={change.class} style={{backgroundImage: `url(${change.path})`}}></div>
              </div>
              <div className="col">
                <input className="inputs" type="number" onChange={(event)=>this.setChange(event, change.name)} value={this.state.qty} placeholder="how many?" />
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