import React, { Component } from 'react';
import del from './Images/delete.svg';
import './Css/Line.css';


class Line extends Component {

  render() {

    const itemName = this.props.itemName;
    const itemId = itemName.toLowerCase();
    const ulId = itemId + 's';

    function testCheck(itemId) {

      var checkbox = document.getElementById(itemId);
    }

    return (

<ul className="sub" id={ulId}>
  <li><input type="checkbox" className="check" id={itemId} onClick={testCheck(itemId)} /></li>
  <li className= "item"><label htmlFor={itemId}>{itemName}</label></li>
  <li className= "quantity">{this.props.amount}</li>
  <li className="del"><img src={del} onClick = "DeleteRow(newUlId)" alt="Delete"/></li>
</ul>

);
}
}

export default Line;
