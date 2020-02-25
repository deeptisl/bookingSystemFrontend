import axios from 'axios';

import { GET_CITIES } from '../constants/action-types';


export function populateCities(details) {
    return dispatch => {
        const headers = { 'Content-Type': 'application/json' };
        return axios
            .post("http://localhost:5000/api/cities/search",details, { headers })
            .then(response => response.data)
            .then(json => {
                dispatch({ type: GET_CITIES, payload: json });
            });
    };
}


