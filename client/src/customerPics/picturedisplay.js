import React, { Component } from "react";
import PicBox from "./pictureBox";
import { log } from "util";

class PicDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const picsDis = Object.keys(this.props.src).map(key => this.props.src[key]);
    console.log(picsDis, this.props.src);

    return (
      <div className="BrianBoitano">
        {Object.keys(this.props.src).map(keys => {
          return (
            <PicBox
              className="BrianBoitano"
              key={keys}
              src={this.props.src[keys]}
              dates={Object.keys(this.props.src)}
            />
          );
        })}
      </div>
    );
  }
}
export default PicDisplay;
