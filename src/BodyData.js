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
<<<<<<< HEAD
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
=======
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
>>>>>>> 77402c9c11a10445fd107927ad3ee9f51bc3ee29


      </div>
    )
    }

  }

export default BodyData;
