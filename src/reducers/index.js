import { GET_CITIES, GET_DRIVER } from '../constants/action-types';

const initialState = {
  citiesList: [],
  driverList: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_CITIES) {
    return {
      ...state,
      citiesList: action.payload
    };
  }
  if (action.type === GET_DRIVER) {
    return {
      ...state,
      driverList: action.payload
    };
  }
  return state;
}

export default rootReducer;
