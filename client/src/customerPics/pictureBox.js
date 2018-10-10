import React, { Component } from "react";
import InstaFeed from "../instafeed"
import { log } from "util";

class PicBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const picsDis = Object.keys(this.props.src).map(key => this.props.src[key]);
    console.log(picsDis, this.props.src);
    var url = Object.keys(picsDis).map(key =>console.log(picsDis[key],picsDis)
    )
    console.log(picsDis[0], url);
    
    
    
    
    const picAdd = Object.keys(url).map(key => {
      let newDis = {};
      newDis[key] = url[key];
      key=[key]
      return newDis;
    });
    const uiDisplay = Object.keys(picAdd, url).map(key => {
      console.log(this.props,picAdd);
      return (
        <div key={key}>
          <h3 className="font">{this.props.src[key]}</h3>
          <div>
            <img
              className="Display"
              key={key}
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
