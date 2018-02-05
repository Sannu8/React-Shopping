import React, { Component } from 'react';
import './Css/Form.css';

import Line from './Line.js';
import BodyData from './BodyData.js';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      quantity: ''
    }
  }

  render() {

    const itemInput=this.props.itemInput;
    const quantityInput=this.props.quantityInput;
    const btnValue = this.props.btnValue;

    return (
      <table className="form">
        <tbody>
          <tr>
          <th>{itemInput}</th>
          <th>{quantityInput}</th>
          </tr>

        <tr>
        <td>
          <input
            type="text"
            id={itemInput.toLowerCase()}
            value = {this.state.item}
            onChange={(e) => this.setState({item: e.target.value})}/>
        </td>
        <td>
          <input
            type="text"
            id={quantityInput.toLowerCase()}
            value = {this.state.quantity}
            onChange={(e) => this.setState({quantity: e.target.value})}/>
        </td>
        <td>
        <input type="button" value={btnValue} id={btnValue} onClick={(e) => this.props.onAdd(this.state.item, this.state.quantity)}/>
        </td>

        </tr>
        </tbody>
      </table>
    );
  }
}
export default Form;
