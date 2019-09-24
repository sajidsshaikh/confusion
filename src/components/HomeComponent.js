import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard(props) {
    console.log('Inside render card ' + props.item.name);
    return(
        <Card>
            <CardImg src={props.item.image} alt={props.item.name} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null }
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props) {
    console.log('Inside home ' + props.dish[0]);   
    return(
      <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish[0]}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader[0]}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion[0]}/>
            </div>
        </div>
      </div>
    );
}
export default Home;