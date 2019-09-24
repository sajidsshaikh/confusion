import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishes from '../shared/dishes'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dishes : Dishes,
      selectedDish: 0
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log('This is selected dish id' + this.state.selectedDish);
  }
  
  render () {
    return (
      <div>
        <Header></Header>
        {/* Here we are creating a new property call menuClick and then to it we are passing a function */}
        <Menu dishes={this.state.dishes}
              menuClick={(dishId) => this.onDishSelect(dishId)}></Menu>
        <DishDetail dishdetail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
