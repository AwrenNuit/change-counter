import React, { Component } from 'react';

class ChangeItem extends Component {

  setChange = (name) =>{
    this.props.addChange(name)  
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
              <input className="inputs" type="number" onChange={()=>this.setChange(this.props.change.name)} value={this.props.change.quantity} placeholder="how many?" />
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