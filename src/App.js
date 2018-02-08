import React, { Component } from 'react';
import './Css/App.css';

import Header from './Header.js';
import Form from './Form.js';
import BodyData from './BodyData.js';


import logo from './Images/logo.png';


class App extends Component {

  constructor(props){
    super (props);
    this.state = {

      itemArray : ['Chicken','Pork','Milk','Cheese','Spinach'],
      amountArray : ['2kg','1kg','1l','500g','2kg'],
      addedItemArray : [],
      addedAmountArray : [],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }


    handleAdd(item, amount){

        const newItemArray = Object.assign([], this.state.itemArray).concat(item);
        const newAmountArray = Object.assign([], this.state.amountArray).concat(amount);

        this.setState({
          itemArray: newItemArray,
          amountArray : newAmountArray,
          item: '',
          amount: ''
        })
      }

      handleDelete = (index, id) => {
        console.log('index: ' + index);
        console.log('id: ' + id);
        if (id === 'mainUl') {


          const newItemArray = Object.assign([], this.state.itemArray).filter((item, i) => i!==index);
          const newAmountArray = Object.assign([], this.state.amountArray).filter((item, i) => i!==index);

        this.setState({
          itemArray : newItemArray,
          amountArray : newAmountArray})

      }

        else if (id === 'mainAddedUl') {
        const newAddedItemArray = Object.assign([], this.state.addedItemArray).filter((item, i) => i!==index);
        const newAddedAmountArray = Object.assign([], this.state.addedAmountArray).filter((item, i) => i!==index);

        this.setState({

          addedItemArray : newAddedItemArray,
          addedAmountArray : newAddedAmountArray
        })
        }
      }

      handleCheck = (index, id, item, amount) => {
        console.log('index: ' + index);
        console.log('item: ' + item);
        console.log('amount' + amount);
        console.log('id' + id);

        if (id=== 'mainUl') {

          const newAddedItemArray = Object.assign([], this.state.addedItemArray).concat(item);
        const newAddedAmountArray = Object.assign([], this.state.addedAmountArray).concat(amount);

      //  const newItemArray = Object.assign([], this.state.itemArray).filter(e => e!==item);
      //  const newAmountArray = Object.assign([], this.state.amountArray).filter(e => e!==amount);
      const newItemArray = Object.assign([], this.state.itemArray).filter((item, i) => i!==index);
      const newAmountArray = Object.assign([], this.state.amountArray).filter((item, i) => i!==index);


        this.setState ({
          addedItemArray : newAddedItemArray,
          addedAmountArray : newAddedAmountArray,
          itemArray: newItemArray,
          amountArray : newAmountArray,
        })
      }

      else if (id === 'mainAddedUl') {

const newAddedItemArray = Object.assign([], this.state.addedItemArray).filter((item, i) => i!==index);
  const newAddedAmountArray = Object.assign([], this.state.addedAmountArray).filter((item, i) => i!==index);
      //  const newAddedItemArray = Object.assign([], this.state.addedItemArray).filter(e => e!==item);
        const newItemArray = Object.assign([], this.state.itemArray).concat(item);

      const newAmountArray = Object.assign([], this.state.amountArray).concat(amount);


        this.setState ({
          addedItemArray : newAddedItemArray,
          itemArray: newItemArray,
          amountArray: newAmountArray,
          addedAmountArray : newAddedAmountArray,
        })
      }
    }

  render() {

    return (
      <div className="shoppinglist">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Header logoImage={logo} />

        <Form
          itemInput="Item"
          quantityInput="Quantity"
          btnValue="Add"
          onAdd={this.handleAdd}
          />

        <BodyData
          id="ToAdd"
          title="Add To Cart:"
          ulId="mainUl"
          ref="ToAdd"
          itemArray={this.state.itemArray}
          amountArray = {this.state.amountArray}
          delete ={(index) => this.handleDelete(index, 'mainUl')}
          //check = {this.handleCheck}
          check = {(index, item, amount) => this.handleCheck(index, 'mainUl', item, amount)}
  />

        <BodyData
          id="Added"
          title="Added:"
          ulId="mainAddedUl"
          itemArray={this.state.addedItemArray}
          amountArray = {this.state.addedAmountArray}
          delete = {(index) => this.handleDelete(index, 'mainAddedUl')}
          //check = {this.handleCheck}
          check = {(index, item, amount) => this.handleCheck(index, 'mainAddedUl', item, amount)}
          />

        </div>
    );
  }
}

export default App;
