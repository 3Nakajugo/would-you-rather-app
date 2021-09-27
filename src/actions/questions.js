import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION"

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
      dispatch(createNewQuestion(question));
      dispatch(addQuestionToUser(question));
      dispatch(hideLoading());
    });
  };
}

export function addAnswerToQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer(info).then(() => {
      dispatch(addAnswerToQuestion(info));
      dispatch(addAnswerToUser(info));
      dispatch(hideLoading());
    });
  };
};