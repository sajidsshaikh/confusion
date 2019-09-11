import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    
    componentDidMount() {
        console.log('Menu componend did mount was invoked');
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <DishDetail dishdetail={dish}/>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick={() => this.props.menuClick(dish.id)}>
                        <CardImg width="100%" src={dish.image}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;