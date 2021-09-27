import React, { Component } from 'react'

import { ProgressBar } from "react-bootstrap";

export class PollResults extends Component {
  handleDisplayedData = () => {
    const {
      questionOneVotes,
      questionTwoVotes
    } = this.props.question;

    const totalNumberOfAnswers =
      questionOneVotes + questionTwoVotes;
    const questionOneAnswersPercentage = (
      (questionOneVotes / totalNumberOfAnswers) *
      100
    ).toFixed(2);
    const questionTwoAnswersPercentage = (
      (questionTwoVotes / totalNumberOfAnswers) *
      100
    ).toFixed(2);

    return {
      ...this.props.question,
      totalNumberOfAnswers,
      questionOneAnswersPercentage,
      questionTwoAnswersPercentage
    };
  };
  render() {
    const {
      questionOneAnswersPercentage,
      questionTwoAnswersPercentage,
      questionOneVotes,
      questionTwoVotes,
      totalNumberOfAnswers,
      OptionOneText,
      OptionTwoText,
      userAnswer,
      author,
      authorAvatar
    } = this.handleDisplayedData();
    return (
      <div className="card Regular shadow questions-container" >
        <div className="card-header" style={{ fontWeight: 'bold' }}>
          <h4 className="card-title" >Asked by {author}</h4>
        </div>
        <div className="mb-2" >
          <div className="row g-0">
            <div className="col-md-3">
              <img src={authorAvatar} className="img-fluid rounded-circle avatar" alt="avator" />
            </div>
            <div className="col-md-1">
              <div className="vr"></div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title" style={{ fontWeight: 'bold' }}>Results</h6>
                <div
                  className={
                    questionOneVotes > questionTwoVotes
                      ? "highest-option"
                      : "option"
                  }
                >
                  {userAnswer === OptionOneText && (
                    <div className="check-user-option">
                      <span><b>Your Vote</b></span>
                    </div>
                  )}

                  <span>{OptionOneText}</span>
                  <ProgressBar
                    variant="success"
                    now={questionOneAnswersPercentage}
                    label={`${questionOneAnswersPercentage}%`}
                  />
                  <span>
                    {questionOneVotes} of {totalNumberOfAnswers}
                  </span>
                </div>
                <div
                  className={
                    questionOneVotes > questionTwoVotes
                      ? "option"
                      : "highest-option"
                  }
                >
                  {userAnswer === OptionTwoText && (
                    <div className="check-user-option">
                      <span><b>Your Vote</b></span>
                    </div>
                  )}

                  <span>{OptionTwoText}</span>
                  <ProgressBar
                    variant="success"
                    now={questionTwoAnswersPercentage}
                    label={`${questionTwoAnswersPercentage}%`}
                  />
                  <span>
                    {questionTwoVotes} of {totalNumberOfAnswers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PollResults
