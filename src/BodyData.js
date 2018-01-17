import React, { Component } from 'react';
import './Css/BodyData.css';
import Line from './Line.js';

class BodyData extends Component {

  render() {

    const itemArray = ['Chicken','Pork','Milk','Cheese','Spinach'];
    const amountArray = ['2kg','1kg','1l','500g','2kg'];

    return (
      <div id={this.props.id}>
        <h3>{this.props.title}</h3>

        <ul id= {this.props.ulId}>
          <li className = "heading">
            <strong>Item</strong>
          </li>
          <li className = "heading">
            <strong>Quantity</strong>
          </li>

          {itemArray.map((item,i) => <Line itemName={item} amount={amountArray[i]} />)}

        </ul>
      </div>
    );
  }
}
export default BodyData;
