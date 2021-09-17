import { _getQuestions, _getUsers } from "../utils/_DATA";
import { getAllUsers } from "./users";
import { getAllQuestions } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading'

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }))
};

export function handleGetInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getAllUsers(users))
        dispatch(getAllQuestions(questions))
        dispatch(hideLoading())
      })

  }
}