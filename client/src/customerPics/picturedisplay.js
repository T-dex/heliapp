import React, { Component } from "react";
import PicBox from "./pictureBox";
import { log } from "util";

class PicDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const picsDis = Object.keys(this.props.src).map(key => this.props.src[key]);
    console.log(picsDis);
    let random= Math.floor(Math.random()*160606)

    return (
      <div className="BrianBoitano">
        {Object.keys(picsDis).map(keys => {
          return (
            <PicBox
              className="BrianBoitano"
              key={random}
              src={picsDis[keys]}
              dates={Object.keys(this.props.src)}
            />
          );
        })}
      </div>
    );
  }
}
export default PicDisplay;
