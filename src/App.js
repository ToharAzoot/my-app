import React, { Component } from 'react';
import Home from './Home';
import Userchild from './Userchild';
import Administer from './Administer';
import Allprop from './Allprop';
import AdministerFirst from './AdministerFirst';
import Name from './Name';
import Signup from './Signup';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from './axios';
import Error from './error';
import AddChild from './AddChild';
import Goodbye from './Goodbye';
import Propertychildren from './Propertychildren';
import './UI/App.css';
import logo from './assets/emuna2-removebg-preview.png';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} width="350" height="250" style={{"top":"70%","left":"3%","position": "absolute","zIndex": "2"}}/>
        {/* <header className="App-header"> */}
        <div>
          <BrowserRouter>
            <nav>
              <Link to="/"></Link>
              <Link to="/Signup">
                <div id="btn1" className="button">
                  <h1>התחברות</h1>
                </div>
              </Link>
              <Link to="/Administer">
                <div id="btn2" className="button">
                  <h1>סטטוס ילדים במעון</h1>
                </div>
              </Link>
              <Link to="/Propertychildren">
                <div id="btn3" className="button">
                  <h1>שינוי פרטי ילד</h1>
                </div>
              </Link>
              <Link to="/AddChild">
                <div id="btn4" className="button">
                  <h1>הוספת ילד</h1>
                </div>
              </Link>
              <Link to="/Goodbye">
                <div id="btn5" className="button">
                  <h1>יציאה</h1>
                </div>
              </Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Userchild/:value" component={Userchild} />
              <Route path="/Allprop/:value" component={Allprop} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Administer" component={Administer} />
              <Route path="/Propertychildren" component={Propertychildren} />
              <Route path="/AddChild" component={AddChild} />
              <Route path="/Goodbye" component={Goodbye} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
