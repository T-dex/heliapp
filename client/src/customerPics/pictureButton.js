import React, { Component } from 'react';


class PicturePicker extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <option>
      {this.props.value}
    </option>
    )
  }
}
 export default PicturePicker;
