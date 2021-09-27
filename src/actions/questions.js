import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestion } from "../utils/_DATA";
import { addQuestionToUser } from "./users";

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";

export function getAllQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}
export function createNewQuestion(question) {
  return { type: CREATE_NEW_QUESTION, question };
}

export function handleCreateNewQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser["authedUser"],
    };
    dispatch(showLoading());
    return _saveQuestion(question).then((question) => {
      dispatch(createNewQuestion(question))
      dispatch(addQuestionToUser(question))
      dispatch(hideLoading())
    });
  };
}
