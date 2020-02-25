import { GET_CITIES } from '../constants/action-types';

const initialState = {
  citiesList: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_CITIES) {
    return {
      ...state,
      citiesList: action.payload
    };
  }
  return state;
}

export default rootReducer;
