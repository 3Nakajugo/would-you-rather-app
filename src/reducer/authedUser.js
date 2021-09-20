import { GET_AUTHED_USER } from '../actions/authedUser';

const initialState = {
  authedUser: null,
  isLoggedIn: false
};

export default function authedUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHED_USER:
      return {
        ...state,
        isLoggedIn: true,
        authedUser:action.id
      }

    default:
      return state;
  }
};