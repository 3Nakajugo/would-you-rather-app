import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { answered, unanswered } = this.props
    return (
      <div>
        <div>
        {unanswered.map(id => (
              <Question key={id} id={id} />
            ))}
        </div>
        <div>
        {answered.map(id => (
              <Question key={id} id={id} />
            ))}
        </div>
        
      </div>
    )
  }
}


function mapStateToProps({ questions, authedUser }) {

  let loggedInUser = authedUser["authedUser"]

  return {
    questions,
    answered: Object.keys(questions)
      .filter(id => {
        return (
          questions[id].optionOne.votes.includes(loggedInUser) ||
          questions[id].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    unanswered: Object.keys(questions)
      .filter(id => {
        return (
          !questions[id].optionOne.votes.includes(loggedInUser) &&
          !questions[id].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
