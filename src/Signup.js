import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Goodbye from './Goodbye';
import { withRouter } from 'react-router-dom';
import Administer from './Administer';
import Userchild from './Userchild';
import './UI/Signup.css';
import { connect } from 'react-redux';


class Signup extends Component {
    state = {
        pass: null,
        showing: false,
        where: "/Signup",
        Password: "",
        user: {
            send: "uyiy",
            y: null
        },
    }

    render() {        
        // if(this.state.user.id!=null || this.state.user.name!=null || this.state.user.class!=null || this.state.user.group!=null || this.state.user.word!=null || this.state.user.gname!=null)
        if (this.state.user.y === null)
            return (
                <div className="signup-header">
                    {(console.log(this.state.user.y))}
                    <form id="signup-form">
                        <div style={{ display: this.state.user.send ? 'none' : 'block', color: 'red' }}>סיסמא שגויה</div>
                        <label>סיסמא</label>
                        <input type="password" id="Password" value={this.state.Password} className="input" onChange={(event) => this.setState({ Password: event.target.value })} />
                    </form>
                    <input type="submit" className="SubmitSignupSave" onClick={this.check} value="אישור" />
                </div>
            );
        else
        {
            if(this.props.isAdmin){
                return <Redirect to='/' />
            }
            else
                return (<Userchild value={this.state.Password} />)
        }

        //onClick={() => this.newUserHandler(this.state)}onSubmit={() => this.newUserHandler(this.state.user)}
    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }
    inputChange = async (event) => {
        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id] = event.target.value;

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
    check = async () => {
        console.log('check', this.state.Password, process.env.REACT_APP_ADMIN_ID )
        if(this.state.Password == process.env.REACT_APP_ADMIN_ID){
            this.props.updateIsAdmin('true');
        }
        else {
            this.props.updateIsAdmin('false');
        }

        const newperson = { ...this.state.user };
        const id = "y"
        //let r = await axios.get('PropertyChildren/GetChild/' + this.state.Password);
       // alert(r.data)
        newperson[id] = 2; //r.data
        const id1 = "send"
       // newperson[id1] = r.data;
        this.setState({ user: newperson });
        this.props.updateIsLogin('true');
    }
    p = async () => {

        const ch = {
            ChildId: this.state.ChildId,
            ChildName: this.state.ChildName,
            ChildClass: this.state.ChildClass,
            ChildGroup: this.state.ChildGroup,
        };
        const us = {
            UserName: this.state.UserName,
            Password: this.state.Password,
        };

        await axios.post('PropertyChildren/AddChildren', ch)
            .then(() => { alert('hiiiii') })
            .then(await axios.post('User/AddUser', us)).then(() => { alert('yesssssssssss') }).catch((err) => {
                console.log(err);
            }).then()
    }
    newUserHandler(children) {
        debugger;
        axios.post('PropertyChildren/AddChildren', { children }).then(() => { alert('hiiiii') });
    }
} 
const mapStateToProps = (state) => {
    return {
      isAdmin: state.isAdmin,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      updateIsAdmin: (isAdmin) => {
        dispatch({
          type: 'UPDATE_IS_ADMIN',
          payload: {
            isAdmin: isAdmin
          },
        });
      },
      updateIsLogin: (isLogin) => {
        dispatch({
          type: 'UPDATE_IS_LOGIN',
          payload: {
            isLogin: isLogin
          },
        });
      },
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);


