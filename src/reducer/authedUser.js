import { GET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser';

const initialState = {
  authedUser: '',
  isLoggedIn: false
};

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHED_USER:
      return {
        ...state,
        isLoggedIn: true,
        authedUser: action.id
      }

    case REMOVE_AUTHED_USER:
      return {
        ...state,
        isLoggedIn: false,
        authedUser: ''
      }

    default:
      return state;
  }
};