import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from './axios';
import Goodbye from './Goodbye';
import { withRouter } from 'react-router-dom';
import './UI/signup1.css';

class AddChild extends Component {

    state = { 
        pass:null,
        showing: false, 
        where:"/Signup",
        Password:"",
        user: {
            send:"989",
         //   y:"9908"
        },
    } 


    render() {
       // if(this.state.user.id!=null || this.state.user.name!=null || this.state.user.class!=null || this.state.user.group!=null || this.state.user.word!=null || this.state.user.gname!=null)
        return (
            <div lassName="signup-header">
                <form id="signup-form">
                <div style={{ display: this.state.user.send? 'none':'block' ,color:'red'}}>סיסמא שגויה</div>
                    <label>סיסמא</label>
                    <input type="text" id="Password" value={this.state.user.Password} className="input"  onChange={(event) => this.setState({Password: event.target.value})}/>
                 </form>
                    <input type="submit" className="SubmitSignupSave" onClick={this.check} value="שמור" />
      
            </div >
        );
            

//onClick={() => this.newUserHandler(this.state)}onSubmit={() => this.newUserHandler(this.state.user)}
    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }
    inputChange = async(event) => {
        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id]=event.target.value;
      
       this.setState({ user: newperson });
    }
    nnnn = (event) => {

        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id];
        //songChange=event.target.value;
        // newsong[event.target.id]=songChange;

        this.setState({ user: newperson });
    }
   // newUserHandler = (user) => { 
   //    debugger;
   //     axios.post('PropertyChildren/AddChildren', user).then(x => {
    //        console.log("sucses! " + x);
   //     })
    //}‏
    check = async() => {
          const newperson = { ...this.state.user };
          const id="y" 
           let r=await axios.get('PropertyChildren/GetChild/'+this.state.user.Password);
        //  newperson[id]=r.data;
         const id1="send"
         newperson[id1]=r.data;
        this.setState({ user: newperson });
    }
    p= async () => {

        const ch = {
            ChildId: this.state.ChildId,
            ChildName:this.state.ChildName,
            ChildClass: this.state.ChildClass,
            ChildGroup: this.state.ChildGroup,
        };
        const us = {
            UserName: this.state.UserName,
            Password:this.state.Password,
        };

        await axios.post('PropertyChildren/AddChildren',ch)
            .then(()=>{alert('hiiiii')})
             .then(await axios.post('User/AddUser', us)).then(()=>{alert('yesssssssssss')}).catch((err) => {
                console.log(err);}).then()
    }
    newUserHandler(children) {
        debugger;
        axios.post('PropertyChildren/AddChildren',{children}).then(()=>{alert('hiiiii')});
    }
} export default (withRouter(AddChild)) ;


