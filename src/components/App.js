import { handleGetInitialData } from '../actions/shared';
import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>

            {this.props.authedUser === null
              ? <Route render={() => <Login />} />
              : 
                <Route path="/home" exact component={Home} />
              }
          </div>
        </Fragment>

      </Router>

    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: users,
    authedUser: null
  };
};

export default connect(mapStateToProps)(App);
