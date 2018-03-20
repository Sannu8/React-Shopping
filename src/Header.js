import React, {Component} from 'react';
import './Css/Header.css';


class Header extends Component {
  render(){
    return (
      <header>
      <img src={this.props.logoImage} className="logo"/>
      </header>
    );
  }

}

export default Header;
