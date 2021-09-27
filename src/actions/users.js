export const GET_ALL_USERS = 'GET_ALL_USERS'
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function getAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    users,
  }
}

export function addQuestionToUser (question){
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
};