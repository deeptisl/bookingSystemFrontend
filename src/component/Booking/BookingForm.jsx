import React, { Component } from 'react';
import {
    Navbar, Form, Button, Card
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DriverList } from '../../action/action';
import '../Login/Login.css';

function mapDispatchToProps(dispatch) {
    return {
        DriverList: () => dispatch(DriverList())
    };
}

const mapStateToProps = state => {
    return {
        driverList: state.driverList
    };
};

class BookingForm extends Component {

    constructor() {
        super();
        this.state = {
            driverLists: []

        };
    }

    async componentWillMount() {
        await this.props.DriverList().then(() => {
            this.setState({
                driverLists: this.props.driverList
            })
        });
    }

    render() {
        console.log(this.props.location.state);
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand style={{ marginLeft: '45%' }}>
                        {' '}
                        Deepak Travels{' '}
                    </Navbar.Brand>
                </Navbar>
                <div className="BookingPage" >
                    {/* <Card> */}
                    <div className="container">
                        <div className="row" >
                            <div className="col-sm">
                                <div className="searchContainer">
                                    <Form>
                                        <Form.Group
                                            controlId="from"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Select Origin"
                                                value={this.props.location.state.bookingdata.originCity}
                                                required
                                                disabled
                                            />

                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="searchContainer">
                                    <Form>
                                        <Form.Group
                                            controlId="to"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Select destination"
                                                value={this.props.location.state.bookingdata.destination}
                                                required
                                                disabled
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="searchContainer">
                                    <Form>
                                        <Form.Group
                                            controlId="to"
                                        >
                                            <Form.Control
                                                className="form-control"
                                                type="date"
                                                value={this.props.location.state.bookingdata.sourceDate}
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="searchContainer">
                                    <Button className='btn btn-secondary' disabled>Modify Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.driverLists.map(totalDrivers => {
                        return (
                            <Card >{totalDrivers.firstName} {totalDrivers.lastName}</Card>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const BookingPage = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(BookingForm)
);

export default BookingPage;