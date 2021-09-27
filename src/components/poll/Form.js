import React, { Component } from 'react'

class Form extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { selectedOption } = this.state;

    this.props.handleSaveQuestionAnswer(selectedOption);
  };

  render() {
    const {
      OptionOneText,
      OptionTwoText,
      author,
      authorAvatar
    } = this.props.question;
    console.log(this.props.question);
    return (
      <div className="card Regular shadow questions-container" >
        <div className="card-header" style={{ fontWeight: 'bold' }}>
          <h4 className="card-title" >{author} asks: </h4>
        </div>
        <div className="card-body">
          <div className="col">
          <img src={authorAvatar} className="img-fluid rounded-circle avatar" alt="avator" />
            <h4>Would you rather...</h4> <br />
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="radio"
                  id="qn1"
                  value="optionOne"
                  name="qn"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <label htmlFor="qn1">{OptionOneText}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="qn2"
                  value="optionTwo"
                  name="qn"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <label htmlFor="qn2">{OptionTwoText}</label>
              </div>
              <button type="submit"
                className="btn shadow-none"
                style={{
                  backgroundColor: "#09b1a8",
                  color: "#ffffff",
                  width: "100%",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
