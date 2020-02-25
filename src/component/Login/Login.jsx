import React, { Component } from 'react';
import {
    Navbar, Card, Button, Form
} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { populateCities } from '../../action/action';
import './Login.css';


function mapDispatchToProps(dispatch) {
    return {
        populateCities: (searchString) => dispatch(populateCities(searchString))
    };
}

const mapStateToProps = state => {
    return {
        citiesList: state.citiesList
    };
};

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            roundTrip: false,
            bgColorOne: 'blue',
            bgColorRound: 'black',
            cityList: []

        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        event.preventDefault();
        if (event.target.id === 'from') {
            const result = event.target.value;
            if (result && result.length >= 1) {
                const searchString = {
                    CityName: result,
                    Country: result
                };
                await this.props.populateCities(searchString).then(() => {
                    if (this.props.citiesList) {
                        this.setState({
                            cityList: this.props.citiesList
                        })
                    }
                })
            }
        }
    }

    handleClick(value) {
        if (value === 'oneWay') {
            this.setState({
                bgColorOne: 'blue',
                bgColorRound: 'black',
                roundTrip: false
            })
        }
        if (value === 'round') {
            this.setState({
                bgColorOne: 'black',
                bgColorRound: 'blue',
                roundTrip: true
            })
        }
    }

    moveToBookingPage() {
        //console.log("Was Clicked");
        this.setState({
            redirect: true
        })

    }

    render() {
        console.log("resut", this.state.cityList)
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand style={{ marginLeft: '45%' }}>
                        {' '}
                        Deepak Travels{' '}
                    </Navbar.Brand>
                </Navbar>
                <div className="LoginPage" >
                    <h1 className='App-Layout'>Welcome To Deepak Travels</h1>
                    <Card style={{ marginTop: '10%' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <Link><Button className='btn btn-primary btn-sm' onClick={() => this.handleClick('oneWay')}
                                        style={{ backgroundColor: this.state.bgColorOne }}>ONE WAY</Button></Link>
                                </div>
                                <div className="col-sm">
                                    <Link><Button className='btn btn-primary btn-sm'
                                        onClick={() => this.handleClick('round')}
                                        style={{ backgroundColor: this.state.bgColorRound }}>ROUND TRIP</Button></Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <Form>
                                        <Form.Group
                                            controlId="from"
                                        >
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                placeholder="Select Origin"
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        {this.state.cityList.map(totalCities => {
                                            return (
                                                <li style={{textColor:"Black"}}>{totalCities.CityName}</li>
                                            );
                                        })}
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <Form>
                                        <Form.Group
                                            controlId="to"
                                        >
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                placeholder="Select destination"
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <DatePicker
                                        placeholderText="Depart Date"
                                        minDate={new Date()}
                                        dateFormat="dd-MM-yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        required
                                    />
                                </div>
                                <div className="col-sm">
                                    <DatePicker
                                        placeholderText="Return Date"
                                        minDate={new Date()}
                                        disabled={!this.state.roundTrip}
                                        dateFormat="dd-MM-yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        required
                                    />
                                </div>
                                <div className="col-sm">
                                    <Link><Button className='btn btn-primary btn-sm' onClick={() => this.moveToBookingPage()}>BOOK</Button></Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

const Login = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginForm)
);

export default Login;
