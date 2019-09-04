import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import Dishes from './shared/dishes';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dishes : Dishes
    };
  }
  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarBrand href="/">Home2</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}

export default App;
