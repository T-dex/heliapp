import React, { Component } from 'react';
import Rebase from 're-base';
import firebase, { auth } from './firebase/firebase';
import './styles/app.css';
import { EventEmitter } from 'events';
import ResPage from './calendar/datePicker';
import Header from "./header";
import Pics from "./customerPics/pictures";
import NavBar from "./navComponents";
import Weather from "./weather.js/weather";
import { withRouter } from "react-router-dom";
import axios from 'axios'


const base = Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      production: {
        days: {}
      },
      page: null,
      user: false,
      uid: "",
      remainingdays: "",
      test:[],
    };
    this.logOut = this.logOut.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.newReservation = this.newReservation.bind(this);
  }

  componentDidMount() {
    this.getShitfromAPI();
    {
      base.syncState(`staging`, {
        context: this,
        state: "production"
      });
    }
    const email = localStorage.getItem("email");
    const uid = localStorage.getItem("uid");
    this.setState({ user: email });
    this.setState({ uid: uid });
  };
 

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
    this.eventEmitter.addListener("landingPage", ({ page }) => {
      this.userScreen({ newLandingPage: page });
    });
  }
  
  renderLogin(logInfo) {
    const email = logInfo.email;
    const pass = logInfo.pass;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(snapshot => {
        let logInSucess = "Logging in...";
        const userName = "Welcome back";
        this.setState({ user: snapshot.email });
        this.setState({ uid: snapshot.uid });
        localStorage.setItem("email", snapshot.email);
        localStorage.setItem("uid", snapshot.uid);
      })

      .catch(error => {
        let failStatus = "Email/Password is incorrect. Please try again";
        alert("Incorrect Email/Password");
      });
  }

  resetPassword(resetPass) {
    const email = resetPass;
    const promise = auth.sendPasswordResetEmail(email);
    promise
      .then(snapshot => {
        console.log("Sent email");
      })
      .catch(error => {
        console.log("not sent");
      });
    console.log(email);
  }
  logOut(pageLogout) {
    this.setState({ user: null });
    this.setState({ uid: null });
    firebase.auth().signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("uid");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
  }
  userScreen({ newLandingPage }) {
    this.setState({ page: newLandingPage });
    this.setState({ user: localStorage.email });
    this.setState({ uid: localStorage.uid });
  }
getShitfromAPI=()=>{
          fetch('/api')
          .then(res=>res.json())
          .then(password=>this.setState({test:password}))
        }
  async newReservation(Res) {
    if (this.state.remainingdays === 0) {
      alert("Please contact Admin about adding more days!");
    } else {
      let res = Object.keys(this.state.production.days).map(
        key => this.state.production.days[key]
      );
      let resMapOne = Object.keys(res).map(key => {
        let date = res[key].date;
        let flyTime = res[key].reservationOne.timeSlot;
        let mappedRes = date;
        return mappedRes;
      });
      let resMapTwo = Object.keys(res)
        .filter(key => {
          let date = res[key].date;
          let keys = res[key].reservationTwo;
          return keys;
        })
        .map(keys => {
          let date = res[keys].date;
          let flyTime = res[keys].reservationTwo.timeSlot;
          let mappedRes = date + " " + flyTime;
          return mappedRes;
        });
      let newResMapTwo = res.map(key => res[key]);

      const addReservationAM = {
        date: Res.day,
        ref: `https://bluebirdheli-d1f5.firebaseio.com/staging/days/${Res.day}`,
        reservationOne: {
          groupUID: this.state.uid,
          numberOfAttendees: Number(Res.numberOfAttendees),
          operatingArea: Res.operatingArea,
          pickupLocation: Res.pickupLocation,
          pickupTime: Date.now(),
          ref: `https://bluebirdheli-d1f5.firebaseio.com/staging/days/${
            Res.day
          }`,
          timeSlot: Res.timeSlot
        }
      };
      const addReservationPM = {
        date: Res.day,
        ref: `https://bluebirdheli-d1f5.firebaseio.com/staging/days/${Res.day}`,
        reservationTwo: {
          groupUID: this.state.uid,
          numberOfAttendees: Number(Res.numberOfAttendees),
          operatingArea: Res.operatingArea,
          pickupLocation: Res.pickupLocation,
          pickupTime: Date.now(),
          ref: `https://bluebirdheli-d1f5.firebaseio.com/staging/days/${
            Res.day
          }`,
          timeSlot: Res.timeSlot
        }
      };
      //Have this working for entering date with reservationOne, Now I need to go through and figure out how to push reservationTwo
      if (
        resMapOne.includes(Res.day + " " + Res.timeSlot) &&
        resMapTwo.includes(Res.day + " " + Res.timeSlot)
      ) {
        alert("All booked up! Please Select a different day!");
      } else if (resMapOne.includes(Res.day + " " + Res.timeSlot)) {
        alert(
          "This time slot is not avaiable please select a different time on that day"
        );
      } else if (resMapTwo.includes(Res.day + " " + Res.timeSlot)) {
        alert(
          "This time slot is not avaiable please select a different time on that day"
        );
      } else {
        //Checking days to imput either reservation One or Two
        const checkFilter = Object.keys(res)
          .map(key => res[key])
          .filter(key => {
            let varKey = [];
            varKey = key;
            const updatedReservationsAM = {
              ...this.state.production.days,
              [Res.day]: addReservationAM
            };
            console.log(updatedReservationsAM);
            this.setState(prevState => ({
              production: {
                ...prevState.production,
                days: updatedReservationsAM
              }
            }));
            return varKey;
          });
        // This should be the area that getting reservationTwo pushed in.

        const checkRes = Object.keys(res).filter(key => {
          let resOne = res[key];
          if (resOne.date === Res.day) {
            const updatedReservationsPM = {
              ...this.state.production.days,
              [Res.day]: addReservationPM
            };
            this.setState(prevState => ({
              production: {
                ...prevState.production,
                days: updatedReservationsPM
              }
            }));
          }
        });
        alert(
          "You are booked for " +
            Res.operatingArea +
            " skiing lodge on " +
            Res.day
        );
        alert(
          "You will be flying out of " +
            Res.pickupLocation +
            ". Your pick up time is in the " +
            Res.timeSlot
        );
        const removeDays = Object.keys(this.state.production.users)
          .map(key => this.state.production.users[key])
          .map(key => {
            if (key.uid === this.state.uid) {
              const user = key;
              const usedDay = key.remainingTrips - 1;
              const updatedRemainingtrips = {
                ...user,
                remainingTrips: usedDay
              };
              const updatedUser = {
                ...this.state.production.users,
                [key.uid]: updatedRemainingtrips
              };
              this.setState(prevState => ({
                production: {
                  ...prevState.production,
                  users: updatedUser
                }
              }));
              return key.remainingTrips;
            }
          });
        console.log(res, Res);
        console.log(
          addReservationAM.reservationOne || addReservationPM.reservationTwo
        );
        const { user } = this.state;
        const emailUserAndAdmin = await axios.post("api/", {
          user,
          Res
        });
      }
    }
  }

  render() {
    if (this.state.user !== null) {
      const remainingDays = { ...this.state.production.users };
      Object.keys(remainingDays)
        .map(key => this.state.production.users[key])
        .filter(key => {
          if (key.uid === this.state.uid) {
            this.state.remainingdays = key.remainingTrips;
            return key.remainingTrips;
          }
        });
      if (this.state.remianingdays === 0) {
        alert("Please contact Admin to add more Days");
      }
    }
    let userPage;
    if (this.state.user == null) {
      userPage = (
        <div>
          <h1 className="font"> Please Log In!</h1>
        </div>
      );
    } else if (this.state.page === 1 && this.state.user !== null) {
      userPage = (
        <ResPage
          users={Object.keys(this.state.production.users).map(key => {
            if (this.state.uid === this.state.production.users[key].uid) {
              return this.state.production.users[key];
            }
          })}
          reservations={this.state.production.reservations}
          days={this.state.production.days}
          newReservation={this.newReservation.bind(this)}
        />
      );
    } else if (this.state.page === 2 && this.state.user !== null) {
      userPage = (
        <Pics
          dates={Object.keys(this.state.production.days).map(key => {
            return key;
          })}
          picture={this.state.production.images}
          videos={this.state.production.videos}
        />
      );
    }

    return (
      <div className="App">
        <div>
          <Header
            user={this.state.user}
            uid={this.state.uid}
            renderLogin={this.renderLogin.bind(this)}
            resetPassword={this.resetPassword.bind(this)}
            logOut={this.logOut.bind(this)}
            reservations={this.state.production.days}
            remainingDays={this.state.remainingdays}
          />
          <NavBar
            eventEmitter={this.eventEmitter}
            landingPage={this.state.page}
          />
        </div>
        <div className="mainArea">{userPage}</div>
        <Weather />
      </div>
    );
  }
}

export default withRouter(App);
