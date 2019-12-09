import React, { Component } from 'react';

class ChangeItem extends Component {

  setChange = (amt) =>{
  this.props.addChange(amt)  
  }

  render(){
    return(
        <div key={this.props.i}>
          <div className="row">
            <div className="col">
              <div className={this.props.change.class} style={{backgroundImage: `url(${this.props.change.path})`}}></div>
            </div>
            <div className="col">
              <input type="number" onChange={()=>this.setChange(this.props.change.name)} value={this.props.change.quantity} placeholder="how many?" />
            </div>
          </div>
        </div>
    )
  }
}

export default ChangeItem;