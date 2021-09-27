import { handleGetInitialData } from "../actions/shared";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from 'react-redux-loading'
import Login from "./Login";
import Home from "./Home";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Navigation />
            {this.props.authedUser === "" ? (
              <Route render={() => <Login />} />
            ) : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: users,
    authedUser: authedUser["authedUser"],
  };
}

export default connect(mapStateToProps)(App);
