import './App.css';
import { handleGetInitialData } from './actions/shared';
import React from 'react';
import { connect } from 'react-redux'
import Login from './components/Login';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(App);
