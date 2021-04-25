import React, { Component } from 'react'
import axios from './axios';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import Administer from './Administer';
import './UI/Goodbye.css';

class Goodbye extends Component {
  render() {
    return (
      <div className="Goodbye-header">
        <p className="textGoodbye">Good-bye !!</p>
        <Link to='/Signup'>
          <button className="SubmitGoodbye">כניסה</button>
        </Link>
      </div>
    );
  }
}

export default Goodbye;
