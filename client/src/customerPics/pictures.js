import React, { Component } from 'react';
import PicDisplay from './picturedisplay';

class Pics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.picture);
    return (
      <div>
        <div className="PicDisplay">
          {Object.keys(this.props.picture).map(keys => {
            return (
              <PicDisplay
                key={keys}
                dates={this.props.picture.date}
                index={keys}
                src={this.props.picture[keys]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Pics;
