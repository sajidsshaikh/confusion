import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props) {
    const listItems = props.comments.map((item) => {
        return(
            <ul key={item.id}> 
                <li>{item.comment}</li>
                <li>{item.author}</li>
                <li>{item.date}</li>
                <li>{item.rating}</li>
            </ul>
            
        );
    });
    return (
        <div className="container">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dishdetail[0].name}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div key={props.dishdetail[0].id} className="col-12 col-md-5 mt-5"> 
                <Card>
                    <CardImg width="100%" src={props.dishdetail[0].image}></CardImg>
                    <CardBody>
                        <CardTitle>{props.dishdetail[0].name}</CardTitle>
                        <CardText>{props.dishdetail[0].description}</CardText>
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

export default DishDetail;