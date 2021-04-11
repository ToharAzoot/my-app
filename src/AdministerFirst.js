import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from './axios';
import Userchild from './Userchild';
import Administer from './Administer';
class AdministerFirst extends Component {
   

    render() {
        return ( 
        <form>
        <Link to={'/Administer'}><button>סטטוס ילדים במעון</button></Link>
        <Link to={'/AddChild'}><button>להוספת ילד</button></Link>
        <Link to={'/Propertychildren'}><button>לשנוי פרטי הילד</button></Link>
        </form>
        );

    }
    
    //handleChange = input => e => {
     //   e.preventDefault();
      //  this.setState({ [input]: e.target.value });
    //};
     // <!--div><Link to={'/Userchild/'+this.state.user.Password}> <button id="Userchild">כניסה</button></Link>
                    // <Link to="/Userchild"> <button id="Userchild">login</button></Link><button type="submit" className="SubmitSave" onClick={() => this.newUserHandler(this.state.user)}>כניסה</button>
                // </div-->   <a מעון אמונ </a><img src="./images/lili.png" />
    componentWillMount = () => {
        console.log("hello hodaya"); 
    }
    signupHandler = () => {
        console.log("sign up");

    }
    inputChange = (event) => {

        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id];
        //songChange=event.target.value;
        // newsong[event.target.id]=songChange;

        this.setState({ user: newperson });
    }

   // newUserHandler = (user) => {
     //   debugger;
      //  axios.get('user/register', user).then(x => {
      //      console.log("sucses! " + x);
      //  })
    //} 
} export default AdministerFirst;


