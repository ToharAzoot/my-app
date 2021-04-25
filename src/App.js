import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Error from './error';
import ConfirmationArrivalChild from './ConfirmationArrivalChild';
import './App.css';
import axios from './axios';
import SignUp from './components/sign_up'
import Child from './components/show_child'
import Goodbye from './components/good_bye'
import AdministerFirst from './components/admin_first'
import Administer from './components/administer'
import AddChild from './components/add_child'
import GetChild from './components/get_child'
import EditChild from './components/edit_child';

class App extends Component {

  constructor (){
    super();
    simulation();
    this.state = {
      showLoader: false
    }
    this.toggleLoader = this.toggleLoader.bind(this);

    // פונקציה שקורת פעם ביום ומאפסת את הטבלה של העת הילד 
  // פונקציה שקורת פעם ביום ומאפסת את הטבלה של העת הילד 
    // פונקציה שקורת פעם ביום ומאפסת את הטבלה של העת הילד 
    setInterval(function () {
      var date = new Date();
      if ( date.getHours() === 6 && date.getMinutes === 0) {
        let r = axios.get('User/ResetDailyAlerts/');
      }
    }, 1000)

  }

  toggleLoader = () => {
    this.setState({showLoader: !this.state.showLoader})
  }

  render () {  
      return(
        <div>
          <header className="App-header">
            <Switch>
              <Route path="/child">
                <Child showLoader={this.state.showLoader} toggleLoader={this.state.toggleLoader}/>
              </Route>
              <Route path="/Signup">
                <SignUp toggleLoader={this.toggleLoader} showLoader={this.state.showLoader}/>
              </Route>
              <Route path="/GetChild">
                <GetChild />
              </Route>
              <Route path="/Edit/:id">
                <EditChild />
              </Route>
              <Route path="/AdministerFirst" component={AdministerFirst} />
              <Route path="/Administer" component={Administer} />
              <Route path="/AddChild" component={AddChild} />
              <Route path="/Goodbye" component={Goodbye} />
              <Route path="/ConfirmationArrivalChild/:value" component={ConfirmationArrivalChild} />
              <Route path="/">
                <SignUp toggleLoader={this.toggleLoader} showLoader={this.state.showLoader}/>
              </Route>
              <Route component={Error} />
            </Switch>
          </header>
        </div>
      );
  }
}

const simulation = () => {
    let r = axios.get('User/ChackIfSendAReminderEmail/');
}

export default App;