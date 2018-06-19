import React, { Component } from "react";
import Reservation from "./reservations";
import Calendar from "./calendar";
import uuid from "uuid";

const style = {
  position: "relative",
  margin: "50px auto",
  width: "502px"
};

class ResPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      timePickUp: null
    };
    this.newRes = this.newRes.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const val = event;
    let newDate = val;
    this.setState({ date: newDate });
  }

  timechange = event => {
    let newtime = "";
    let newTimeDropDown = event.target.value;
    newtime = newTimeDropDown;
    console.log(newtime);
    this.setState({ timePickUp: newtime });
  };

  newRes(event) {
    var pickUpLocation = this.refs.hangarPickup.value;
    if (pickUpLocation == "Other") {
      let pickUpZone = prompt("Enter Location for Pick up");
      pickUpLocation = pickUpZone;
      const Res = {
        operatingArea: this.refs.opsArea.value,
        pickupLocation: pickUpLocation,
        numberOfAttendees: this.refs.guest.value,
        day: this.state.date,
        pickupTime: this.refs.exactTimePickUp.value,
        timeSlot: this.refs.pickupTime.value
      };
      this.props.newReservation(Res);
      return;
    } else if (
      this.refs.opsArea.value == "null" ||
      pickUpLocation == "null" ||
      this.refs.guest.value == "null" ||
      this.refs.pickupTime.value == "null"
    ) {
      alert("Please Update Reservation");
    } else {
      const Res = {
        operatingArea: this.refs.opsArea.value,
        pickupLocation: pickUpLocation,
        numberOfAttendees: this.refs.guest.value,
        day: this.state.date,
        pickupTime: this.refs.exactTimePickUp.value,
        timeSlot: this.refs.pickupTime.value
      };
      this.props.newReservation(Res);
    }
  }

  onClickYear(event) {
    const val = event;
  }
  onDayClick = (e, reservationDate) => {
    this.setState({ date: reservationDate });
  };

  render() {
    let timePickUpDropDown;
  //   let morningvar=(<option className="dropdownStyle" value="6:30 AM">
  //   6:30 AM
  // </option>
  // <option className="dropdownStyle" value="6:45 AM">
  //   6:45 AM
  // </option>
  // <option className="dropdownStyle" value="7:00 AM">
  //   7:00 AM
  // </option>
  // <option className="dropdownStyle" value="7:15 AM">
  //   7:15 AM
  // </option>
  // <option className="dropdownStyle" value="7:30 AM">
  //   7:30 AM
  // </option>
  // <option className="dropdownStyle" value="7:45 AM">
  //   7:45 AM
  // </option>
  // <option className="dropdownStyle" value="8:00 AM">
  //   8:00 AM
  // </option>
  // <option className="dropdownStyle" value="8:15 AM">
  //   8:15 AM
  // </option>
  // <option className="dropdownStyle" value="8:30 AM">
  //   8:30 AM
  // </option>
  // <option className="dropdownStyle" value="8:45 AM">
  //   8:45 AM
  // </option>
  // <option className="dropdownStyle" value="9:00 AM">
  //   9:00 AM
  // </option>
  // <option className="dropdownStyle" value="9:15 AM">
  //   9:15 AM
  // </option>
  // <option className="dropdownStyle" value="9:30 AM">
  //   9:30 AM
  // </option>
  // <option className="dropdownStyle" value="9:40 AM">
  //   9:40 AM
  // </option>
  // <option className="dropdownStyle" value="10:00 AM">
  //   10:00 AM
  // </option>
  // <option className="dropdownStyle" value="10:15 AM">
  //   10:15 AM
  // </option>
  // <option className="dropdownStyle" value="10:30 AM">
  //   10:30 AM
  // </option>
  // <option className="dropdownStyle" value="10:45 AM">
  //   10:45 AM
  // </option>
  // <option className="dropdownStyle" value="11:00 AM">
  //   11:00 AM
  // </option>
  // );
    let eveningvar=(<select className="dropdownStyle" ref="exactTimePickUp">
    <option
      className="dropdownStyle"
      value="null"
      disable="true"
      selected
      hidden
    >
      Select a time frame for pickup
    </option>
    <option className="dropdownStyle" value="1:00 PM"> 
      {" "}
      1:00 PM
    </option>
    <option className="dropdownStyle" value="1:15 PM">
      {" "}
      1:15 PM
    </option>
    <option className="dropdownStyle" value="1:30 PM">
      {" "}
      1:30 PM
    </option>
    <option className="dropdownStyle" value="1:45 PM">
      {" "}
      1:45 PM
    </option>
    <option className="dropdownStyle" value="2:00 PM">
      {" "}
      2:00 PM
    </option>
    <option className="dropdownStyle" value="2:15 PM">
      {" "}
      2:15 PM
    </option>
    <option className="dropdownStyle" value="2:30 PM">
      {" "}
      2:30 PM
    </option>
    <option className="dropdownStyle" value="2:45 PM">
      {" "}
      2:45 PM
    </option>
    <option className="dropdownStyle" value="3:00 PM">
      {" "}
      3:00 PM
    </option>
    <option className="dropdownStyle" value="3:15 PM">
      {" "}
      3:15 PM
    </option>
    <option className="dropdownStyle" value="3:30 PM">
      {" "}
      3:30 PM
    </option>
    <option className="dropdownStyle" value="3:45 PM">
      {" "}
      3:45 PM
    </option>
    <option className="dropdownStyle" value="4:00 PM">
      {" "}
      4:00 PM
    </option>
    <option className="dropdownStyle" value="4:15 PM">
      {" "}
      4:15 PM
    </option>
    <option className="dropdownStyle" value="4:30 PM">
      {" "}
      4:30 PM
    </option>
    <option className="dropdownStyle" value="4:45 PM">
      {" "}
      4:45 PM
    </option>
    <option className="dropdownStyle" value="5:00 PM">
      {" "}
      5:00 PM
    </option>
    <option className="dropdownStyle" value="5:15 PM">
      {" "}
      5:15 PM
    </option>
    <option className="dropdownStyle" value="5:30 PM">
      {" "}
      5:30 PM
    </option>
    <option className="dropdownStyle" value="5:45 PM">
      {" "}
      5:45 PM
    </option>
    <option className="dropdownStyle" value="6:00 PM">
      {" "}
      6:00 PM
    </option>
    <option className="dropdownStyle" value="6:15 PM">
      {" "}
      6:15 PM
    </option>
    <option className="dropdownStyle" value="6:30 PM">
      {" "}
      6:30 PM
    </option>
    <option className="dropdownStyle" value="6:45 PM">
      {" "}
      6:45 PM
    </option> 
  </select>);
    if (this.state.timePickUp === null) {
      timePickUpDropDown = "";
    } else if (this.state.timePickUp === "AM") {
      timePickUpDropDown = (
        <select className="dropdownStyle" ref="exactTimePickUp">
          <option
            className="dropdownStyle"
            value="null"
            disable="true"
            selected
            hidden
          >
            Select a time frame for pickup
          </option>
          <option>
          {}
          </option>
        </select>
      );
    } else if (this.state.timePickUp === "PM") {
      timePickUpDropDown = (
        <select className="dropdownStyle" ref="exactTimePickUp">
          <option
            className="dropdownStyle"
            value="null"
            disable="true"
            selected
            hidden
          >
            Select a time frame for pickup
          </option>
          <option className="dropdownStyle" value="1:00 PM"> */}
            {" "}
            1:00 PM
          </option>
          <option className="dropdownStyle" value="1:15 PM">
            {" "}
            1:15 PM
          </option>
          <option className="dropdownStyle" value="1:30 PM">
            {" "}
            1:30 PM
          </option>
          <option className="dropdownStyle" value="1:45 PM">
            {" "}
            1:45 PM
          </option>
          <option className="dropdownStyle" value="2:00 PM">
            {" "}
            2:00 PM
          </option>
          <option className="dropdownStyle" value="2:15 PM">
            {" "}
            2:15 PM
          </option>
          <option className="dropdownStyle" value="2:30 PM">
            {" "}
            2:30 PM
          </option>
          <option className="dropdownStyle" value="2:45 PM">
            {" "}
            2:45 PM
          </option>
          <option className="dropdownStyle" value="3:00 PM">
            {" "}
            3:00 PM
          </option>
          <option className="dropdownStyle" value="3:15 PM">
            {" "}
            3:15 PM
          </option>
          <option className="dropdownStyle" value="3:30 PM">
            {" "}
            3:30 PM
          </option>
          <option className="dropdownStyle" value="3:45 PM">
            {" "}
            3:45 PM
          </option>
          <option className="dropdownStyle" value="4:00 PM">
            {" "}
            4:00 PM
          </option>
          <option className="dropdownStyle" value="4:15 PM">
            {" "}
            4:15 PM
          </option>
          <option className="dropdownStyle" value="4:30 PM">
            {" "}
            4:30 PM
          </option>
          <option className="dropdownStyle" value="4:45 PM">
            {" "}
            4:45 PM
          </option>
          <option className="dropdownStyle" value="5:00 PM">
            {" "}
            5:00 PM
          </option>
          <option className="dropdownStyle" value="5:15 PM">
            {" "}
            5:15 PM
          </option>
          <option className="dropdownStyle" value="5:30 PM">
            {" "}
            5:30 PM
          </option>
          <option className="dropdownStyle" value="5:45 PM">
            {" "}
            5:45 PM
          </option>
          <option className="dropdownStyle" value="6:00 PM">
            {" "}
            6:00 PM
          </option>
          <option className="dropdownStyle" value="6:15 PM">
            {" "}
            6:15 PM
          </option>
          <option className="dropdownStyle" value="6:30 PM">
            {" "}
            6:30 PM
          </option>
          <option className="dropdownStyle" value="6:45 PM">
            {" "}
            6:45 PM
          </option> 
        </select>
      );
      console.log("PM");
    }
    return (
      <div className="selectionpage">
        <div className="selection">
          <select className="dropdownStyle" ref="opsArea">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose Your Operating Area
            </option>
            <option className="dropdownStyle" value="North Operating Area">
              North Operation Area
            </option>
            <option className="dropdownStyle" value="Central Operating Area">
              Central Operation Area
            </option>
            <option className="dropdownStyle" value="Southern Operating Area">
              South Operation Area
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="hangarPickup">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose Your Pick Up Location
            </option>
            <option className="dropdownStyle" value="Heber Hangar">
              Heber Hanger
            </option>
            <option className="dropdownStyle" value="North Salt Lake Hangar">
              North Salt Lake Hanger
            </option>
            <option className="dropdownStyle" value="Other">
              Other
            </option>
          </select>
        </div>
        <div className="selection">
          <select className="dropdownStyle" ref="guest">
            <option
              className="dropdownStyle"
              value="null"
              disable="true"
              selected
              hidden
            >
              Choose the amount of Guest
            </option>
            <option className="dropdownStyle" value="1">
              1
            </option>
            <option className="dropdownStyle" value="2">
              2
            </option>
            <option className="dropdownStyle" value="3">
              3
            </option>
            <option className="dropdownStyle" value="4">
              4
            </option>
            <option className="dropdownStyle" value="5">
              5
            </option>
            <option className="dropdownStyle" value="6">
              6
            </option>
            <option className="dropdownStyle" value="7">
              7
            </option>
            <option className="dropdownStyle" value="8">
              8
            </option>
          </select>
        </div>
        <div className="selection">
          <select
            className="dropdownStyle"
            onChange={this.timechange}
            ref="pickupTime"
          >
            <option disable="true" value="null" selected hidden>
              AM or PM
            </option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div className="selection">{timePickUpDropDown}</div>
        <Calendar
          style={style}
          onDayClick={(e, day) => this.onDayClick(e, day)}
        />
        <div>
          <div>
            <button onClick={this.newRes}>Lets Fly!</button>
          </div>
          <Reservation />
        </div>
      </div>
    );
  }
}
export default ResPage;
