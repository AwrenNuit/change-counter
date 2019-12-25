import React, { Component } from 'react';

class ChangeItem extends Component {

  state = {
    count: 0
  }

  setChange = (name, event) =>{
    this.setState({
      count: event.target.value
    });
    this.sendChange(name);
  }

  sendChange = (name) =>{
    this.props.addChange(name, this.state.count)  ;
  }

  reset = (event, id) =>{
    event.preventDefault();
    this.props.resetCount(id);
  }

  render(){
    return(
        <div key={this.props.i}>
          <div className="row">
            <div className="dbl-col">
              <div className={this.props.change.class} style={{backgroundImage: `url(${this.props.change.path})`}}></div>
            </div>
            <div className="col">
              <input className="inputs" type="number" onChange={(event)=>this.setChange(this.props.change.name, event)} value={this.state.count} placeholder="how many?" />
            </div>
            <div className="col">
              <button onClick={(event)=>this.reset(event, this.props.change.id)}>Reset</button>
            </div>
          </div>
        </div>
    )
  }
}

export default ChangeItem;