export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function getAuthedUser(id) {
  return {
    type: GET_AUTHED_USER,
    id,
  }
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  };
};