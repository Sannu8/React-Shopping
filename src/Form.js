import React, { Component } from 'react';
import './Css/Form.css';

class Form extends Component {

  render() {

    const input1=this.props.input1;
    const input2=this.props.input2;
    const btnValue = this.props.btnValue;

    return (
      <table>
        <tbody>
          <tr>
          <th>{input1}</th>
          <th>{input2}</th>
          </tr>

        <tr>
        <td><input type="text"  id={input1.toLowerCase()} /></td>
        <td><input type="text"  id={input2.toLowerCase()} /></td>
        <td><input type="button" value={btnValue} id={btnValue} onClick="addToDo()"/></td>

        </tr>
        </tbody>
      </table>
    );
  }
}
export default Form;
