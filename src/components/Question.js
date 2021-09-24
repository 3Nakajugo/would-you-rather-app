import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper';
import Error from './Error';
import { withRouter } from "react-router-dom";

class Question extends Component {

  toPoll = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`);
  };

  render() {
    const { question } = this.props;
    if (question === null) {
      return <Error />;
    }
    const {
      OptionOneText,
      author,
      authorAvatar,
      id
    } = this.props.question;
    return (
      <div className="card Regular shadow question-card" style={{ maxWidth: '40%' }}>
        <div className="card-header" style={{ fontWeight: 'bold' }}>
          <h6>{author} asks: </h6>
        </div>
        <div className="mb-2" >
          <div className="row g-0">
            <div className="col-md-3">
              <img src={authorAvatar} className="img-fluid rounded-circle avatar" alt="avator" />
            </div>
            <div className="col-md-1">
              <div className="vr"></div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title" style={{ fontWeight: 'bold' }}>Would you rather</h6>
                <p className="card-text">...{OptionOneText}...</p>
                <button type="submit" className="btn btn-outline-light" onClick={(e) => this.toPoll(e, id)} style={{ color: "#09b1a8", width: '100%', borderColor: '09b1a8', borderStyle: 'solid 1px' }}> View Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const loggedInUser = authedUser["authedUser"]
  return {
    loggedInUser,
    question: question ? formatQuestion(question, users[question.author], loggedInUser) : null
  };
}
export default withRouter(connect(mapStateToProps)(Question))

//formart of the question

// {
//   "id": "xj352vofupe1dqz9emx13r",
//   "loggedInUser": "tylermcginnis",
//   "question": {
//       "id": "xj352vofupe1dqz9emx13r",
//       "author": "johndoe",
//       "timestamp": 1493579767190,
//       "optionOne": {
//           "votes": [
//               "johndoe"
//           ],
//           "text": "write JavaScript"
//       },
//       "optionTwo": {
//           "votes": [
//               "tylermcginnis"
//           ],
//           "text": "write Swift"
//       }
//   }
// }