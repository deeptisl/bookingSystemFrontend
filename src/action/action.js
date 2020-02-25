import axios from 'axios';

import { GET_CITIES, GET_DRIVER } from '../constants/action-types';


export function populateCities(details) {
    return dispatch => {
        const headers = { 'Content-Type': 'application/json' };
        return axios
            .post("https://localhost:5001/api/cities/search", details, { headers })
            .then(response => response.data)
            .then(json => {
                dispatch({ type: GET_CITIES, payload: json });
            });
    };
}

export function DriverList() {
    return dispatch => {
        const headers = { 'Content-Type': 'application/json' };
        return axios
            .get("https://localhost:5001/api/Drivers", { headers })
            .then(response => response.data)
            .then(json => {
                console.log("Driver List", json)
                dispatch({ type: GET_DRIVER, payload: json });
            });
    };
}


