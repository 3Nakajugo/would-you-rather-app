import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from './User';

class LeaderBoard extends Component {
  render() {
    const {users } = this.props
    return (
      <div>
        {users.map((user)=>(
          <User key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users}) {
  const usersArray = Object.keys(users).map((username) => {
      const userObject = users[username];
      return {
        id: username,
          username: userObject.name,
          avatarURL: userObject.avatarURL,
          totalQuestions: Object.keys(userObject.questions).length,
          totalAnswers: Object.keys(userObject.answers).length,
      }
  }).sort((a,b) => (b.totalQuestions + b.totalAnswers) - (a.totalQuestions + a.totalAnswers));
  return {
      users: usersArray
  }
}
export default connect(mapStateToProps)(LeaderBoard)
