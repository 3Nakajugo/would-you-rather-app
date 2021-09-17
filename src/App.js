import './App.css';
import { handleGetInitialData } from './actions/shared';
import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
  }

  render() {
    return (
      <div className="App">
        WOULD YOU RATHER
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
