import { combineReducers } from "redux"
import usersReducer from "./users"
import questionsReducer from "./questions"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({ usersReducer, questionsReducer, loadingBar: loadingBarReducer })




