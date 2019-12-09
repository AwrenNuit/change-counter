import React, { Component } from 'react';
import ChangeItem from '../ChangeItem/ChangeItem';

class ChangeList extends Component {

  render(){
    return (
      <>
        {this.props.list.map((change, i)=>
          <ChangeItem change={change} key={i} i={i} showChange={this.props.showChange} />
        )}
      </>
    )
  }
}

export default ChangeList;