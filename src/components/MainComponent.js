import React, { Component } from 'react';
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: 0,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log('This is selected dish id' + this.state.selectedDish);
  }
  
  render () {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => {return dish.featured === true;})}
          leader={this.state.leaders.filter((leader) => {return leader.featured === true;})}    
          promotion={this.state.promotions.filter((promotion) => {return promotion.featured === true;})}  
        />
      );
    }

    const DishWithId = ({match}) => {
        return(
          <DishDetail dishdetail={this.state.dishes.filter((dish) => {
              console.log('Getting DishId :' + match.params.dishId + ' DishId :' + dish.id);
              return dish.id === parseInt(match.params.dishId, 10);
            }
          )}
            comments={this.state.comments.filter((comment) => {
              console.log('Getting Comment :' + match.params.dishId);
              return comment.dishId === parseInt(match.params.dishId, 10);
            })}
          />
        );
    }

    const AboutWithLeader = () => {
      return(
        <About leaders={this.state.leaders}/>
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
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={AboutWithLeader} />
          <Redirect to="/home"/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
