import React, { Component } from 'react';
import Dishes from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';

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

    const HomePage = () => {
      return(
        <Home/>
      );
    }
    return (
      <div>
        <Header></Header>
        {/* Here we are creating a new property call menuClick and then to it we are passing a function 
        <Menu dishes={this.state.dishes}
              menuClick={(dishId) => this.onDishSelect(dishId)}></Menu>
        <DishDetail dishdetail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        */}
        <Switch>
          <Route  path="/home" component={HomePage} />
          <Route  exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
