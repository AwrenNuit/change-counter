import React, { Component } from 'react';

class ChangeItem extends Component {

  render(){
    return(
        <div key={this.props.i}>
          <div className="row">
            <div className="col">
              <div className={this.props.change.class} style={{backgroundImage: `url(${this.props.change.path})`}}></div>
            </div>
            <div className="col">
              <input type="number" placeholder="how many?" />
            </div>
          </div>
        </div>
    )
  }
}

export default ChangeItem;