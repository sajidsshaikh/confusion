import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { transformFile } from '@babel/core';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    /**
     * 
     * @param {*} event 
     */
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    /**
     * 
     * @param {*} event 
     */
    handleSubmit(event) {
        console.log('Form submitted ' + JSON.stringify(this.state));
        alert('Form submitted ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    /**
     * 
     */
    render() {
        return(
            <div className="container">
                
                <div className="row row-content">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>    
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Telephone #:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" id="telNum" name="telNum" placeholder="Telephone #" value={this.state.telNum}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email :</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="email" id="email" name="email" placeholder="Email @" value={this.state.email}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree}/> {' '}
                                            <strong>May We Contact You</strong>
                                        </Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input  onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your FeedBack:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="textarea" id="message" name="message" placeholder="Feedback" rows="12" value={this.state.message}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <Button type="submit" value="Submit" color="primary">Send FeedBack</Button>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Button type="reset" value="Reset">Reset</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;