import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    /*render() {
        return(
            <div></div>
        );
    }*/
    render() {
        const listItems = this.props.dishdetail.comments.map((item) => {
            return(
                <ul key={item.id}> 
                    <li>{item.comment}</li>
                    <li>{item.author}</li>
                    <li>{item.date}</li>
                    <li>{item.rating}</li>
                </ul>
                
            );
        } );

        return (
            <div className="container">
                <div key={this.props.dishdetail.id} className="col-12 col-md-5 mt-5"> 
                    <Card>
                        <CardImg width="100%" src={this.props.dishdetail.image}></CardImg>
                        <CardBody>
                            <CardTitle>{this.props.dishdetail.name}</CardTitle>
                            <CardText>{this.props.dishdetail.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {listItems}
                        </CardBody>
                    </Card>
                       
                </div>  
            </div> 
        );
    }
}

export default DishDetail;