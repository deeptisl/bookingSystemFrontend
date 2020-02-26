import React, { Component } from 'react';
import {
    Navbar, Form, Button, Col, Row, Table
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DriverList } from '../../action/action';
import '../Login/Login.css';
import cab from '../../cabseaden.png';


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
            driverLists: [],
            originCity: "",
            destinationCity: "",
            sourceDate: ""

        };
    }

    async componentWillMount() {
        if (this.props.location.state) {
            this.setState({
                originCity: this.props.location.state.bookingdata.originCity,
                destinationCity: this.props.location.state.bookingdata.destination,
                sourceDate: this.props.location.state.bookingdata.sourceDate
            })
        }
        await this.props.DriverList().then(() => {
            this.setState({
                driverLists: this.props.driverList
            })
        });
    }

    render() {
        console.log(this.props.driverList)
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand style={{ marginLeft: '45%' }}>
                        {' '}
                        Deepak Travels{' '}
                    </Navbar.Brand>
                </Navbar>
                <div className="BookingPage" >
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
                                                value={this.state.originCity}
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
                                                value={this.state.destinationCity}
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
                                                value={this.state.sourceDate}
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
                <div style={{ padding: '20px 20px 20px 45%', backgroundColor: 'blue', color: 'white' }}>List Of Drivers</div>
                <div>

                    <Form style={{ marginLeft: '75%' }}>
                        <Form.Group as={Row} controlId="sortByLang">
                            <Form.Label column sm={2}>
                                <b>FILTER:</b>
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    as="select"
                                >
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Kannada">Kannada</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <div >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="not_mapped_style"></th>
                                <th className="not_mapped_style">Driver Details</th>
                                <th className="not_mapped_style">Language</th>
                                <th className="not_mapped_style">Total Fare</th>
                                <th className="not_mapped_style">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.driverLists.map(totalDrivers => {
                                return (
                                    <tr>
                                        <td className="not_mapped_style"><img src={cab} alt="" /></td>
                                        <td className="not_mapped_style"><b>{totalDrivers.firstName}  {totalDrivers.lastName} || {totalDrivers.address}</b></td>

                                        <td className="not_mapped_style">
                                            {totalDrivers.language}
                                        </td>
                                        <td className="not_mapped_style">
                                            6000
                                            </td>
                                        <td className="not_mapped_style">
                                            <Button className='btn btn-primary btn-sm'>Pay Fare</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
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