export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"

export function getAllQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  }
}