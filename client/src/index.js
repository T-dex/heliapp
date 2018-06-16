import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom' ;
import './index.css';
import App from './App';
import NavBar from './navComponents';
import registerServiceWorker from './registerServiceWorker';
import firebase, {auth} from './firebase/firebase.js'



class Root extends Component{
  constructor(props){
    super(props)
  }



render(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/App' component={App}/>
        </Switch>
      </div>
    </Router>
  )
}
}

ReactDOM.render(<Root/>
  , document.getElementById('root'));
registerServiceWorker();
