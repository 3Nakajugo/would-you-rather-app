import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Navigation extends Component {
  handleLogout = () => {
    return this.props.dispatch(removeAuthedUser());
  };

  render() {
    const { authedUser, users, loggedInUser } = this.props
    return (
      <div className="bg-light" >
        {authedUser["isLoggedIn"] === true ? (
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={linkstyle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add" style={linkstyle}>
                  New Question
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard" style={linkstyle}>
                  Leader Board
                </Link>
              </li>
              <li className="nav-item">
                <p className="nav-link text-dark">
                  {authedUser["isLoggedIn"] === true && "Hello! " + users[loggedInUser].name}
                </p>
              </li>
              <li className="nav-item">
                <img
                  src={users[loggedInUser].avatarURL}
                  alt='avator'
                  className="nav-avator rounded-circle"
                />
              </li>
              <li className="nav-item">
                <p type="button" className="nav-link" onClick={this.handleLogout} style={linkstyle}>
                  Logout
                </p>
              </li>
            </ul>
            <hr style={linkstyle}/>
          </div>

        ) : (null
        )}

      </div>
    )
  }
}
const linkstyle = {
  color: "#09b1a8",
  fontSize: '18px',
  fontWeight: 'bold'
}

function mapStateToProps({ users, authedUser }) {
  return { loggedInUser: authedUser["authedUser"], authedUser, users }
}

export default connect(mapStateToProps)(Navigation)
