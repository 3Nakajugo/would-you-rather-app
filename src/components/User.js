import React, { Component } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div
        className="card regular box shadow new-question"
        style={{ width: "50%", height:"20%", marginBottom: "10px" }}
      >
        <div className="mb-2">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={user["avatarURL"]}
                className="img-fluid rounded-circle avatar"
                alt="avator"
                style= {{height: "80px" }}
              />
            </div>
              <div className="vr col-md-1" style={{ marginLeft:"2px", marginRight: "20px"}}></div>
            <div className="col-md-4">
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  {user["username"]}
                </h6>
                <p className="card-text" style={{textAlign:'left',flex:'90%'}}>
                  Answered Questions  : {user["totalQuestions"]}
                </p>
                <p className="card-text" style={{textAlign:'left'}}>
                  Created Questions : {user["totalAnswers"]} 
                </p>
            </div>
            <div className="vr col-md-1" style={{marginLeft:"10px"}}></div>
            <div className="card col-md-3"style={{marginLeft:"50px", marginTop:'5px'}}>
              <div className="card-header" style={{textAlign:'center'}}>
                <h6 >Score</h6>
              </div>
              <div className="card-body rounded-circle" style={{textAlign:'center', height:"20px", paddingTop:"50px" , backgroundColor:"#09b1a8", color:"white"}}>
                <span className="score" >
                  {user["totalQuestions"] +
                    user["totalAnswers"]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
