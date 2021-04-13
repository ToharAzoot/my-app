import React, { Component } from 'react'
import logo from './logo.svg';
import Userchild from './Userchild';
import Administer from './Administer';
import Allprop from './Allprop';
import AdministerFirst from './AdministerFirst';
import Name from './Name';
import Signup from './Signup';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Error from './error';
import AddChild from './AddChild';
import Goodbye from './Goodbye';
import Propertychildren from './Propertychildren';
import './App.css';
import axios from './axios';
class App extends Component {
constructor (){
  super();
   simulation();
}

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
const simulation = () => {

    // console.log(grid);
    console.log('hey');
    let r= axios.get('User/ChackIfSendAReminderEmail/');

    setTimeout(simulation, 60000*5)

}
 
export default App;
;