import React from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';



    function RenderMenuItem( {dish, menuClick} ) {
        return (
            <Card onClick={() => menuClick(dish.id)}>
                <CardImg width="100%" src={dish.image}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <RenderMenuItem dish={dish} menuClick={props.menuClick} /> 
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


export default Menu;