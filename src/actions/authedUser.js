export const GET_AUTHED_USER = 'GET_AUTHED_USER'

export function getAuthedUser(id) {
  return {
    type: GET_AUTHED_USER,
    id,
  }
}