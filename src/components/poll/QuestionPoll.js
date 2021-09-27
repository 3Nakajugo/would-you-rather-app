import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from './Form'
import { formatQuestion } from '../../utils/helper';
import { handleAddAnswer } from '../../actions/questions';
import PollResults from './PollResults';
import Error from '../Error';

export class QuestionPoll extends Component {
  handleSubmit = optionSelected => {
    const { dispatch, qid, loggedInUser } = this.props;

    dispatch(
      handleAddAnswer({
        authedUser: loggedInUser,
        qid: qid,
        answer: optionSelected
      })
    );
  };
  render() {
    const { question, isVoted } = this.props;
    if (!question) {
      return <Error/>;
    }
    return (
      <>
        {!isVoted && (
                  <Form
                    question={question}
                    handleSaveQuestionAnswer={this.handleSubmit}
                  />
                )}
                {isVoted && <PollResults question={question} />}
      </>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const loggedInUser = authedUser['authedUser']
  return {
    question: question
      ? formatQuestion(question, users[question.author], loggedInUser)
      : null,
    loggedInUser: loggedInUser,
    qid: id,
    isVoted: question
      ? questions[id].optionOne.votes.includes(loggedInUser) ||
      questions[id].optionTwo.votes.includes(loggedInUser)
      : null
  };
}

export default connect(mapStateToProps)(QuestionPoll)
