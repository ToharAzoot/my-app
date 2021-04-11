import React, { Component } from 'react'
import logo from './logo.svg';
import Userchild from './Userchild';
import Administer from './Administer';
import Allprop from './Allprop';
import AdministerFirst from './AdministerFirst';
import Name from './Name';
import Signup from './Signup';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import axios from './axios';
import Error from './error';
import AddChild from './AddChild';
import Goodbye from './Goodbye';
import Propertychildren from './Propertychildren';
import './App.css';

class App extends Component {
  render ()
  {
    return(
      //  <div className="App">
      <div>
      <header className="App-header">
        <Switch>
          <Route path="/Userchild/:value" component={Userchild} />
          <Route path="/Allprop/:value" component={Allprop} />
          <Route path="/Signup" component={Signup} />
          <Route path="/AdministerFirst" component={AdministerFirst} />
          <Route path="/Administer" component={Administer} />
          <Route path="/Propertychildren" component={Propertychildren} />
          <Route path="/AddChild" component={AddChild} />
          <Route path="/Goodbye" component={Goodbye} />
          <Route component={Error} />
        </Switch>
      </header>
    </div>
    );
  }
}

export default App;
