import React, { Component } from 'react';
import './Css/BodyData.css';
import Line from './Line.js';

class BodyData extends Component {

  render() {

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

        {this.props.itemArray.map((item,i,amount) => <Line
          itemName={item}
          amount={this.props.amountArray[i]}
          delete={() => this.props.delete(i)}
          check={() => this.props.check(i,item,this.props.amountArray[i])}
          ulId = {this.props.ulId}
          key = {i}
          />)}

          </ul>


      </div>
    )
    }

  }

export default BodyData;
