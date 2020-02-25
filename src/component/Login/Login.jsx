import React, { Component } from 'react';
import {
    Navbar, Card, Button, Form
} from 'react-bootstrap';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
            cityList: [],
            redirect: false,
            originCity: "",
            destination: '',
            destinationcityList: [],
            sourceDate: ''

        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
        if (event.target.id === 'originCity') {
            if (event.target.value < 1) {
                this.setState({ cityList: [] });
            }
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
        else if (event.target.id === 'destination') {
            if (event.target.value < 1) {
                this.setState({ destinationcityList: [] });
            }
            const result = event.target.value;
            if (result && result.length >= 1) {
                const searchString = {
                    CityName: result,
                    Country: result
                };
                await this.props.populateCities(searchString).then(() => {
                    if (this.props.citiesList) {
                        this.setState({
                            destinationcityList: this.props.citiesList
                        })
                    }
                })
            }
        }
        else if (event.target.id === 'FromDate') {
            await this.setState({
                sourceDate: event.target.value
            })
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
        this.setState({
            redirect: true
        })

    }

    async handleSelectCity(data, source) {
        if (source === 'origin') {
            await this.setState({
                originCity: data.cityName,
                cityList: []
            })
        }
        else if (source === 'destination') {
            await this.setState({
                destination: data.cityName,
                destinationcityList: []
            })
        }
        console.log("Details", this.state.originCity)
    }

    render() {
        console.log("Date", this.state.sourceDate)

        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/BookingFrom',
                state: { bookingdata: this.state }
            }} />
        }
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
                                            controlId="originCity"
                                        >
                                            <Form.Control
                                                type="search"
                                                placeholder="Select Origin"
                                                value={this.state.originCity}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </Form.Group>
                                        {this.state.cityList.map(totalCities => {
                                            return (
                                                <Card onClick={() => this.handleSelectCity(totalCities, 'origin')}>{totalCities.cityName}</Card>
                                            );
                                        })}
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <Form>
                                        <Form.Group
                                            controlId="destination"
                                        >
                                            <Form.Control
                                                type="search"
                                                placeholder="Select destination"
                                                value={this.state.destination}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        {this.state.destinationcityList.map(totalCities => {
                                            return (
                                                <Card onClick={() => this.handleSelectCity(totalCities, 'destination')}>{totalCities.cityName}</Card>
                                            );
                                        })}
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <Form>
                                        <Form.Group
                                            controlId="FromDate"
                                        >
                                            <Form.Control
                                                type="date"
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <Form>
                                        <Form.Group
                                            controlId="to"
                                        >
                                            <Form.Control
                                                type="date"
                                                disabled={!this.state.roundTrip}
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-sm">
                                    <Link><Button disabled={!this.state.originCity || !this.state.destination || !this.state.sourceDate} className='btn btn-primary btn-sm' onClick={() => this.moveToBookingPage()}>BOOK</Button></Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div >
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
