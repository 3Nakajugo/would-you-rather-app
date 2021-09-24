import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom'

export class Login extends Component {

  state = { user: '' };


  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ user: value });
  }

  handleSubmit = (e) => {
    const { dispatch, history } = this.props
    e.preventDefault();
    if (this.state.user === '') {
      alert('failed to login ')
    } else {
      dispatch(getAuthedUser(this.state.user));
      history.push("/");
    }

  }
  render() {
    const { users } = this.props
    return (

      <div className="login-container card Regular shadow" >
        <div className="card-header">
          <h2> Welcome To The Would You Rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className=" login-content">
          <h5> Sign In</h5>
          <select value={this.state.user} onChange={this.handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
            <option value="Select a user..." >Select a user...</option>
            {Object.keys(users).map((user) => (
              <option key={users[user].id} value={users[user].id}>
                {users[user].name}
              </option>
            ))}
          </select>
          <button onClick={this.handleSubmit} type="submit" className="btn shadow-none" style={{ backgroundColor: "#09b1a8", color: "#ffffff", width: '100%', marginBottom: '15px', marginTop: '20px' }}>Sign In</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    isLoggedIn: authedUser !== '' ? true : false,
    users
  }

}

export default withRouter(connect(mapStateToProps)(Login))
