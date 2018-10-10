import React, { Component } from 'react';
import PicBox from './pictureBox';

class Pics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   let random=Math.floor(Math.random()*666)
    return (
      <div>
        <div className="PicDisplay">
          {Object.keys(this.props.picture).map(keys => {
            if(keys==this.props.uid){
            return (
              <PicBox
                key={keys}
                dates={this.props.picture[keys].date}
                index={keys}
                src={this.props.picture[keys]}
              />
            );
            }
          })}
        </div>
      </div>
    );
  }
}
export default Pics;
