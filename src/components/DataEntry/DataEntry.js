import React, { Component } from 'react';

class DataEntry extends Component {
  render(){
    return (
      <>
       <div className="row">
         <div className="col">
           <img className="coin" src={require('../../images/penny.jpg')} alt="Penny Coin" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="coin" src={require('../../images/nickel.jpg')} alt="Nickel Coin" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="coin" src={require('../../images/dime.jpg')} alt="Dime Coin" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="coin" src={require('../../images/quarter.jpg')} alt="Quarter Coin" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="bill" src={require('../../images/one.jpg')} alt="One Dollar Bill" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="bill" src={require('../../images/five.jpg')} alt="Five Dollar Bill" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="bill" src={require('../../images/ten.jpg')} alt="Ten Dollar Bill" />
         </div>
       </div>
       <div className="row">
         <div className="col">
           <img className="bill" src={require('../../images/twenty.jpg')} alt="Twenty Dollar Bill" />
         </div>
       </div>
      </>
    )
  }
}

export default DataEntry;