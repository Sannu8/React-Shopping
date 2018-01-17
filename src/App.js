import React, { Component } from 'react';
import './Css/App.css';

import Header from './Header.js';
import logo from './Images/logo.png';
import Form from './Form.js';
import BodyData from './BodyData.js';

import Line from './Line.js';


class App extends Component {
  constructor(props){
    super (props);
    this.state = {

    };
  }

  handleClick() {
    this.setState();
  }

  addToDo() {
        var item = document.getElementById('item');

        var newUlId = item.value + 's';
        var itemString = item.value;

        var quantity = document.getElementById('quantity');
        var mainUl = document.getElementById('mainUl');

        mainUl.appendChild(<Line itemName={item.value} amount={quantity.value} />);
      }


      TestCheck(checkboxId) {
        console.log(checkboxId);
        var checkId = document.getElementById(checkboxId);


      if (checkId.checked == true) {
        //console.log("It is checked");
        var ulId = checkboxId + 's';

        var AddedUl = document.getElementById(ulId);
        //console.log(typeof AddedUl)
        var mainAddedUl = document.getElementById("mainAddedUl");
        //console.log(AddedUl);
        mainAddedUl.appendChild(AddedUl);
    }

      }

      deleteRow(row) {
        var mainUl = document.getElementById('mainUl');
        mainUl.removeChild(row);
      }

      onItemClick(e) {
        e.currentTarget.style.backgroundColor = 'blue';
      }

  render() {
  


    return (
      <div className="shoppinglist">

        <Header logoImage={logo} />

        <Form input1="Item" input2="Quantity" btnValue="Add"/>

        <BodyData id="ToAdd" title="Add To Cart:" ulId="mainUl"/>
        <BodyData id="Added" title="Added:" ulId="mainAddedUl"/>


        </div>
    );
  }
}

export default App;
