import React, { Component } from "react";
import Reservation from "./reservations";
import Calendar from "./calendar";
import uuid from "uuid";

const style = {
  position: "relative",
  margin: "50px auto",
  width: "502px"
};
const amDropdown=[
  {key:0 ,value:'6:30 AM' , text:'6:30 AM' },
  {key:1 ,value:'6:45 AM' , text:'6:45 AM' },
  {key:2 ,value:'7:00 AM' , text:'7:00 AM' },
  {key:3 ,value:'7:15 AM' , text:'7:15 AM' },
  {key:4 ,value:'7:30 AM' , text:'7:30 AM' },
  {key:5 ,value:'7:45 AM' , text:'7:45 AM' },
  {key:6 ,value:'8:00 AM' , text:'8:00 AM' },
  {key:7 ,value:'8:15 AM' , text:'8:15 AM' },
  {key:8 ,value:'8:30 AM' , text:'8:30 AM' },
  {key:9 ,value:'8:45 AM' , text:'8:45 AM' },
  {key:10 ,value:'9:00 AM' , text:'9:00 AM' },
  {key:11 ,value:'9:15 AM' , text:'9:15 AM' },
  {key:12 ,value:'9:30 AM' , text:'9:30 AM' },
  {key:13 ,value:'9:45 AM' , text:'9:45 AM' },
  {key:14 ,value:'10:00 AM' , text:'10:00 AM' }
]
const pmDropdown=[
  {key:0 ,value:'1:00 PM' , text:'1:00 PM' },
  {key:1 ,value:'1:15 PM' , text:'1:15 PM' },
  {key:2 ,value:'1:30 PM' , text:'1:30 PM' },
  {key:3 ,value:'1:45 PM' , text:'1:45 PM' },
  {key:4 ,value:'2:00 PM' , text:'2:00 PM' },
  {key:5 ,value:'2:15 PM' , text:'2:15 PM' },
  {key:6 ,value:'2:30 PM' , text:'2:30 PM' },
  {key:7 ,value:'2:45 PM' , text:'2:45 PM' },
  {key:8 ,value:'3:00 PM' , text:'3:00 PM' },
  {key:9 ,value:'3:15 PM' , text:'3:15 PM' },
  {key:10 ,value:'3:30 PM' , text:'3:30 PM' },
  {key:11 ,value:'3:45 PM' , text:'3:45 PM' },
  {key:12 ,value:'4:00 PM' , text:'4:00 PM' },
  {key:13 ,value:'4:15 PM' , text:'4:15 PM' },
  {key:14 ,value:'4:30 PM' , text:'4:30 PM' }
]

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
   let timeValue;
   let timeText;
    if (this.state.timePickUp === null) {
      timePickUpDropDown = "";
    } else if (this.state.timePickUp === "AM") {
      timePickUpDropDown = amDropdown.map(key=>{ 
        console.log(key);
        timeValue=key;
        return timeValue
      }
      )
      console.log(timePickUpDropDown);
    } else if (this.state.timePickUp === "PM") {
      timePickUpDropDown = pmDropdown.map(key=>{ 
        timeValue=key;
        return timeValue
      }
      )
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
        <div className="selection"><select className="dropdownStyle" ref="exactTimePickUp">
    <option
      className="dropdownStyle"
      value="null"
      disable="true"
      selected
      hidden
    >
      Select a time frame for pickup
    </option>
    <option key={timePickUpDropDown.key} value={timePickUpDropDown.value}>{timePickUpDropDown.text}</option>
    </select></div>
        <Calendar
          style={style}
          onDayClick={(e, day) => this.onDayClick(e, day)}
        />
        <div className="giver">
            <button onClick={this.newRes}>Lets Fly!</button>
         
        </div>
      </div>
    );
  }
}
export default ResPage;
