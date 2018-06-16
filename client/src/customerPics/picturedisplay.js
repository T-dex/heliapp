import React, { Component } from "react";
import PicBox from "./pictureBox";

class PicDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const picsDis = Object.keys(this.props.src).map(key => this.props.src[key]);

    return (
      <div className="BrianBoitano">
        {Object.keys(picsDis).map(keys => {
          return (
            <PicBox
              className="BrianBoitano"
              key={keys}
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
