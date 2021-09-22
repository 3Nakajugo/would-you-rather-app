import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA';
// import {formatQuestion} from '../utils/_DATA'
import Error from './Error';

class Question extends Component {
  render() {
    const question = this.props;
    console.log(question)
    if (question == null) {
      return <Error/>;
    }
    // const {
    //   // questionOptionOneText,
    //   authorName,
    //   authorAvatar,
    //   id
    // } = this.props.question;
    return (
      <div className="Question-container card Regular shadow">
        <div className="card-header">
          name
        </div>

      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question?formatQuestion(questions[id].optionOne, questions[id].optionTwo, users[questions.author]): null
  };
}
export default connect(mapStateToProps)(Question)
