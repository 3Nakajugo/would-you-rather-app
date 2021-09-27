import React, { Component } from "react";
import Question from "./Question";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";

class Home extends Component {
  render() {
    const { answered, unanswered } = this.props;
    return (
      <div className="questions-container">
        <Tabs
        fill justify
          defaultActiveKey="unanswered"
          transition={false}
          id="uncontrolled-tab-example"
        >
          <Tab
            eventKey="unanswered"
            title="Unanswered Questions"
          >
            {unanswered.map((id) => (
              <Question id={id} key={id} />
            ))}
          </Tab>
          <Tab
            eventKey="answered"
            title="Answered Questions"
          >
            {answered.map((id) => (
              <Question id={id} key={id} />
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  let loggedInUser = authedUser["authedUser"];

  return {
    questions,
    answered: Object.keys(questions)
      .filter((id) => {
        return (
          questions[id].optionOne.votes.includes(loggedInUser) ||
          questions[id].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    unanswered: Object.keys(questions)
      .filter((id) => {
        return (
          !questions[id].optionOne.votes.includes(loggedInUser) &&
          !questions[id].optionTwo.votes.includes(loggedInUser)
        );
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Home);
