// All GYMS subreducer

import axios from 'axios';

// ACTION TYPES
const RECEIVED_GYMS = 'RECEIVED_GYMS';

// ACTION CREATOR
const receivedGyms = (gyms) => ({
  type: RECEIVED_GYMS,
  gyms
});

// THUNK CREATOR

// POST api/gyms 
export const getGyms = (location) => async(dispatch) => {
  try {
    // make API call to get all gyms/notes at specific location
    const allGyms = await axios.post(
      `http://localhost:3000/api/gyms`, {location: this.state.location}
    )
    // Dispatch action to reducer to update state
    dispatch(receivedGyms(allGyms));
  } catch (error) {
    throw (error);
  }
};

const initialState = {
  all: [],
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_GYMS:
      return {
        ...state,
        all: action.gyms
      };
    default: 
      return state;
  }
};

export default reducer;