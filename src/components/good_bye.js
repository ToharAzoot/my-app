import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Goodbye extends Component {
  render () {
     return(  
      <div>         
        <p>good bye</p>
        <Link to='/'>
          <button>אישור</button>
          </Link>
        </div>
     );
  }

}

export default Goodbye;