import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom'

export class Login extends Component {

  state = { user: undefined };


  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ user: value });
  }

  handleSubmit = () => {
    if (this.state.user === undefined) {
      console.log('failed to login ')
    } else {
      this.props.dispatch(getAuthedUser(this.state.user));
    }

  }
  render() {
    const { users, authedUser } = this.props
    if (authedUser !== null) {
      return (
        <Redirect to={'/'} />
      )
    }
    return (

      <div className="login-container card Regular shadow" >
        <div className="card-header">
          <h2> Welcome To The Would You Rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className=" login-content">
          <h5> Sign In</h5>
          <select value={this.state.user} onChange={this.handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
            <option value="select" disabled>Select a user...</option>
            {Object.keys(users).map((user) => (
              <option key={users[user].id} value={users[user].id}>
                {users[user].name}
              </option>
            ))}
          </select>
          <button onClick={this.handleSubmit} type="submit" className="btn" style={{backgroundColor:"#09b1a8", color:"#ffffff", width:'100%', marginBottom: '15px', marginTop: '20px'}}>Sign In</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ usersReducer, authedUser }) {
  return {
    isLoggedIn: authedUser !== undefined ? true : false,
    authedUser: authedUser
      ? authedUser
      : null,
    users: usersReducer
  }

}

export default connect(mapStateToProps)(Login)
