import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
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
            message: '',
            touched: {
                firstName:false,
                lastName: false,
                telNum: false,
                email: false
            }
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
    
    validate(firstName, lastName, telNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: ''
        };

        if (this.state.touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstName && firstName.length > 10)
            errors.firstName = 'First Name should be <= 10 characters';

        if (this.state.touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telNum && !reg.test(telNum))
            errors.telNum = 'Tel. Number should contain only numbers';
            
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Email should contain a @';

        return errors;
    }
    
    
    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }
    /**
     * 
     */
    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email);
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
                                    <Input type="text" id="firstName" name="firstName" 
                                    placeholder="First Name" 
                                    valid={errors.firstName === ''}
                                    invalid={errors.firstName !== ''}
                                    onBlur={this.handleBlur('firstName')}
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}></Input>
                                     <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" id="lastName" name="lastName" 
                                    placeholder="Last Name" 
                                    valid={errors.lastName === ''}
                                    invalid={errors.lastName !== ''}
                                    onBlur={this.handleBlur('lastName')}
                                    value={this.state.lastName}></Input>
                                     <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Telephone #:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" id="telNum" name="telNum"
                                     placeholder="Telephone #" 
                                     valid={errors.telNum === ''}
                                     invalid={errors.telNum !== ''}
                                     onBlur={this.handleBlur('telNum')}
                                     value={this.state.telNum}></Input>
                                     <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email :</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="email" id="email" name="email"
                                     placeholder="Email @" 
                                     valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}   
                                     value={this.state.email}></Input>
                                     <FormFeedback>{errors.email}</FormFeedback>
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
                                    <Input onChange={this.handleInputChange} type="textarea" id="message" name="message"
                                     placeholder="Feedback"
                                     rows="12"
                                      value={this.state.message}></Input>
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