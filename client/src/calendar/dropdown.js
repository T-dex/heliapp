import React, {Component} from 'react';

class Dropdown extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <option value={this.props.value}>{this.props.value}</option>
    )
}
}
export default Dropdown