import React, { Component } from 'react';
import del from './Images/delete.svg';
import './Css/Line.css';


class Line extends Component {

  handleCheckClick = (e, itemName, id, ulId) => {

    this.props.check(itemName, this.props.amount, id)
    }

  render() {
    const itemName = this.props.itemName;
    const itemId = itemName.toLowerCase();
    const ulId = itemId + 's';
    const id = this.props.ulId;

    return (

        <ul className="sub" id={ulId}>
          <li>
            <input
              type="checkbox"
              className="check"
              name = "checked"
              id={itemId}
              onChange={(e) => this.handleCheckClick(e, itemName, id, ulId)}
              checked={id !== 'mainUl'}/>
          </li>
          <li className= "item"><label htmlFor={itemId}>{itemName}</label></li>
          <li className= "quantity">{this.props.amount}</li>
          <li className="del"><img src={del} onClick = {(index) => this.props.delete(index, id)} alt="Delete"/></li>
        </ul>);
      }
    }

export default Line;
