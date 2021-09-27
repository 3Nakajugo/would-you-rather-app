import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleCreateNewQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOneChange = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({ optionOne }));
  };

  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({ optionTwo }));
  };

  handleSubmit = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(
      handleCreateNewQuestion(this.state.optionOne, this.state.optionTwo)
    );
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div className="card new-question">
        <h3 className="card-header">Create New Question</h3>
        <div className="card-body">
          <p className="card-text"> Complete the question</p>
          <h4 className="card-title">Would you rather...</h4>
          <form className="new-tweet" onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Enter option one text here"
              onChange={this.handleOptionOneChange}
              value={optionOne}
            />
            <p className="text-center">or</p>
            <input
              id="qn"
              className="form-control"
              type="text"
              placeholder="Enter option two text here"
              onChange={this.handleOptionTwoChange}
              value={optionTwo}
            />
            <button
              className="btn"
              type="submit"
              disabled={optionOne === ""}
              style={{
                backgroundColor: "#09b1a8",
                color: "#ffffff",
                width: "100%",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion));
