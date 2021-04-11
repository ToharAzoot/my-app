import React, { Component } from 'react'
import axios from './axios';
import Signup  from './Signup';
import { Link } from 'react-router-dom';
import Administer from './Administer';

class Goodbye extends Component {
  render ()
  {

     return(  <div><p>good bye</p><Link to='/Signup'><button>אישור</button></Link></div>
     );
  }
}

export default Goodbye;
