import React, { Component } from 'react'
import axios from './axios';
import Signup  from './Signup';
import { Link } from 'react-router-dom';
import Administer from './Administer';

class ConfirmationArrivalChild extends Component {
  constructor(props)
{
    super(props);
}
  render ()
  {

     return(  <div><p>אם הילד שלך לא מגיע היום או שכבר הבאתה אותו להעון ומשום מה זה לא נשמר המערכת נא אשר את בואו או את חסרונטט </p>
     <button onClick={this.check} >אישור</button></div>
     );
  }
  check = async() => {

    let r=await axios.get('User/ConfirmationArrivalChild/'+this.props.match.params.value);
    // alert(r.data)
    //  newperson[id]=r.data;
    //  const id1="send"
    //  newperson[id1]=r.data;
    // this.setState({ user: newperson });
}
}


export default ConfirmationArrivalChild;
