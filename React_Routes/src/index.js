import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import Nav from './components/Nav';

// your code goes here
class Home extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route path='/' component={Nav} >Home</Route>
          <Route path="/happy" component={Happy}>Happy</Route>
          <Route path="/sleepy" component={Sleepy}>Sleepy</Route>
          <Route path='/guilty' component={Guilty}>Guilty</Route>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
