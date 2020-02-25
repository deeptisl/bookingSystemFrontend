import React, { Component } from 'react';
import {
    Navbar, Form, Button
} from 'react-bootstrap';
import '../Login/Login.css';

export default class BookingForm extends Component {


    render() {
        console.log(this.props.location);
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
                                                className="form-control"
                                                as="select"
                                                placeholder="Select Origin"
                                                onChange={this.handleChange}
                                                required
                                            >
                                                <option value="ABC">ABC</option>
                                                <option value="DEF">DEF</option>
                                                <option value="GHI">GHI</option>
                                            </Form.Control>
                                        </Form.Group>
                                        {/* {this.state.cityList.map(totalCities => {
                                            return (
                                                <li style={{ textColor: "Black" }}>{totalCities.CityName}</li>
                                            );
                                        })} */}
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
                                                as="select"
                                                placeholder="Select destination"
                                                required
                                            >
                                                <option value="ABC">ABC</option>
                                                <option value="DEF">DEF</option>
                                                <option value="GHI">GHI</option>
                                            </Form.Control>
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
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                    {/* <DatePicker
                                        placeholderText="Depart Date"
                                        minDate={new Date()}
                                        dateFormat="dd-MM-yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        required
                                    /> */}
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="searchContainer">
                                    <Button className='btn btn-secondary' >Modify Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Card> */}
                </div>
            </div>
        );
    }
}