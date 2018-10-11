import React, { Component } from "react";
import InstaFeed from "../instafeed"
import { log } from "util";

class PicBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var url = Object.keys(this.props.src).map(key => this.props.src[key]);
    const picAdd = Object.keys(url).map(key => {
      let newDis = {};
      newDis[key] = url[key];
      return newDis[key].url;
    });
    const uiDisplay = Object.keys(picAdd, url).map(key => {
      console.log(picAdd);
      
      return (
        <div key={key}>
          <h3 className="font">{this.props.dates[key]}</h3>
          <React.Fragment>
            <img
              className="Display"
              key={key}
              alt=""
              date={this.props.src[key]}
              src={picAdd[key]}
            />
          </React.Fragment>
        </div>
      );
    });
    return <div><div className="BrianBoitano">{uiDisplay}</div><InstaFeed/></div>;
  }
}
export default PicBox;
