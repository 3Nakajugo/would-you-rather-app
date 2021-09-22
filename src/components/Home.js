import React, { Component } from 'react'
// import Question from './Question'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { answered, unanswered } = this.props
    console.log(unanswered, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',)
    console.log(answered, '++++++++++++++++++++++++++++++++++')

    return (
      <div>
        heelo

        {/* <Question key={id} id={id} /> */}


      </div>
    )
  }
}


function mapStateToProps({ questions, authedUser }) {

  return {
    questions,
    answered: Object.keys(questions)
      .filter(id => {
        return (
          questions[id].optionOne.votes.includes(authedUser) ||
          authedUser[id].optionTwo.votes.includes(authedUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    unanswered: Object.keys(questions)
      .filter(id => {
        return (
          !questions[id].optionOne.votes.includes(authedUser) &&
          !questions[id].optionTwo.votes.includes(authedUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
