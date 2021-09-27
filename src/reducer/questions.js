import { GET_ALL_QUESTIONS, CREATE_NEW_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case CREATE_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }

    default:
      return state
  }
}
