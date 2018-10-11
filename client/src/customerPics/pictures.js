import React, { Component } from 'react';
import PicDisplay from './picturedisplay';

class Pics extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="PicDisplay">
          {Object.keys(this.props.picture).map(keys => {
            if(keys==this.props.uid){
            return (
              <PicDisplay
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
