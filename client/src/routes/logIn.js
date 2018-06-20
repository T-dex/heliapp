import React, { Component } from "react";
import firebase, { auth } from "../firebase/firebase.js";
import { withRouter } from "react-router-dom";

// auth.signInWithPassword(email,pass)

class logIn extends Component {
  constructor(props) {
    super(props);
    this.logInfo = this.logInfo.bind(this);
    this.pageLogout = this.pageLogout.bind(this);
    this.resetPass = this.resetPass.bind(this);
  }

  logInfo() {
    const pass = this.refs.pass.value;
    const email = this.refs.email.value;
    const userdata = { email, pass };
    this.props.renderLogin(userdata);
  }
  resetPass() {
    const email = this.refs.email.value;
    this.props.resetPassword(email);
  }
  pageLogout() {
    const email = null;
    const uid = null;
    const remainingDays= null;
    const userData = { email, uid, remainingDays };
    this.props.logOut(userData);
    firebase.auth().signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("uid");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
  }

  render() {

    
    if (this.props.user === null) {
      return (
        <div>
          <div className="loginPage">
            <div className="loginFields">
              <input
                className="inputfield"
                type="text"
                ref="email"
                placeholder="Email"
              />
              <input
                className="inputfield"
                type="password"
                ref="pass"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                className="button"
                onClick={() => this.logInfo("email", "pass")}
              >
                Click to Enter
              </button>
              <button
                className="button"
                onClick={() => this.resetPass("email")}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Welcome back {this.props.user}
          <div>
            <button className="button" onClick={() => this.pageLogout()}>
              Log Out
            </button>
          </div>
          You have {this.props.remainingDays} days left
        </div>
      );
    }
  }
}
export default withRouter(logIn);
