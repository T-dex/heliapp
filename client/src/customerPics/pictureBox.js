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
      let randomKey= Math.floor(Math.random()*10000000)
      return (
        <div key={randomKey}>
          <h3 className="font">{this.props.dates[key]}</h3>
          <div>
            <img
              className="Display"
              key={randomKey}
              alt=""
              date={this.props.src[key]}
              src={picAdd[key]}
            />
          </div>
        </div>
      );
    });
    return <div><div className="BrianBoitano">{uiDisplay}</div><InstaFeed/></div>;
  }
}
export default PicBox;
