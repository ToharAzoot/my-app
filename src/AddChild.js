import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Goodbye from './Goodbye';
import { withRouter } from 'react-router-dom';
import Signup from './Signup';
import Administer from './Administer';
import './UI/AddChild.css';

class AddChild extends Component {

    constructor() {
        super();
        this.state = {
            ChildId: "",
            ChildName: "", 
            ChildClass: "",
            ChildGroup: "",
            UserName: "",
            Password: "",
        }
        this.handleAddChild = this.handleAddChild.bind(this);
    }


    render() {
        //  if(this.state.go===true)
        //  return(<form>{()=>alert('welcome'+this.state.ChildName)}
        //  <Redirect to={'/Signup'}></Redirect>
        //  </form>);
        //else
        //{
            return (
                <div className="addChild-header">
                    <form id="addChild-form">
                        <div className="addChild-detail">
                            <label>ת"ז ילד</label>
                            <div style={{ display: 'block' }}>
                                <input type="char" id="ChildId" className="addChild-input" value={this.state.ChildId} onChange={(event) => this.setState({ ChildId: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <label>שם הילד</label>
                            <div style={{ display: 'block' }}>
                                <input type="text" id="ChildName" className="addChild-input" value={this.state.ChildName} onChange={(event) => this.setState({ ChildName: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <label>מס' כיתה</label>
                            <div style={{ display: 'block' }}>
                                <input type="char" id="ChildClass" className="addChild-input" value={this.state.ChildClass} onChange={(event) => this.setState({ ChildClass: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <label>שם הגננת</label>
                            <div style={{ display: 'block' }}>
                                <input type="text" id="ChildGroup" className="addChild-input" value={this.state.ChildGroup} onChange={(event) => this.setState({ ChildGroup: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <label>שם הורה</label>
                            <div style={{ display: 'block' }}>
                                <input type="text" id="UserName" className="addChild-input" value={this.state.UserName} onChange={(event) => this.setState({ UserName: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <label>ת"ז הורה</label>
                            <div style={{ display: 'block' }}>
                                <input type="password" id="Password" className="addChild-input" value={this.state.Password} onChange={(event) => this.setState({ Password: event.target.value })} />
                            </div>
                        </div>
                        <div className="addChild-detail">
                            <button className="SubmitSave" onClick={(e) => this.handleAddChild(e)}>שמור</button>
                        </div>
                    </form>
                </div >
            );
    }
        // else
        // return(<form>{alert('welcome'+this.state.ChildName)}
        //     <Signup /></form>);
        //}
        // }נחיהטךועם8ם



        //onClick={() => this.newUserHandler(this.state)}onSubmit={() => this.newUserHandler(this.state.user)}<Link to={'Administer'}></Link> 
    // componentWillMount = () => {
    //     console.log("hello hodaya");
    // }
    // signupHandler = () => {
    //     console.log("sign up");

    // }


    // newUserHandler = (user) => { 
    //    debugger;
    //     axios.post('PropertyChildren/AddChildren', user).then(x => {
    //        console.log("sucses! " + x);
    //     })
    //}
    handleAddChild = async (e) => {
        e.preventDefault();
        const state = this.state;
        const id = (state.ChildId.length === 9 && state.ChildId.match(/^[0-9]+$/)) ? state.ChildId : null;
        const name = (state.ChildName) ? state.ChildName : null;
        const ch_class = (state.ChildClass.match(/^[0-9]+$/)) ? state.ChildClass : null;
        const group = (state.ChildGroup) ? state.ChildGroup : null;
        const password = (state.Password.length === 9 && state.Password.match(/^[0-9]+$/)) ? state.Password : null;
        const user = (state.UserName) ? state.UserName : null;

        if (name && ch_class && group) {
            if (password && id) {
                let e = await axios.get('PropertyChildren/Checkifthereislike/' + state.ChildId);
                if (e.data === false) {
                    axios.post('PropertyChildren/AddChildren', {
                        ChildId: id,
                        ChildName: name,
                        ChildClass: ch_class,
                        ChildGroup: group
                    })
                    .then(res => { console.log(res) })
                    .catch(err => console.log(err))

                    axios.post('User/AddUser', { UserName: user, Password: password})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

                    this.props.history.push('/')
                } else {
                    
                    window.alert('תעודת זהות קיימת במערכת', id, name, ch_class, group, user, password)
                }
            }
            else window.alert('תעודת הזהות צריכה להכיל 9 מספרים')
        } 
        else window.alert('כל השדות הינן שדות חובה')
    }






    
    // ‏
    // postDataHandler = async () => {

    //     let newperson = { ...this.state.user };

    //     let id = "id"//if the child has an id
    //     let id7 = "checkid"//if the id is right
    //     let id9 = "ifcheckid" //if there is a child with this id
    //     if (this.state.ChildId) {
    //         newperson[id] = null;
    //         let e = await axios.get('PropertyChildren/Checkifthereislike/' + this.state.ChildId);
    //         alert('e' + e.data)
    //         if (e.data === false) {
    //             newperson[id9] = null;
    //             let r = await axios.get('PropertyChildren/CheckIDNo/' + this.state.ChildId);
    //             alert(r.data)
    //             if (r.data === true)
    //                 newperson[id7] = null;
    //             else
    //                 newperson[id7] = 1;
    //         }
    //         else {
    //             newperson[id9] = 1;
    //             newperson[id7] = null;
    //         }
    //     }
    //     else {
    //         newperson[id] = 1;
    //         newperson[id7] = null;
    //         newperson[id9] = null;
    //     }





    //     let id1 = "name"
    //     newperson[id1] = (this.state.ChildName) ? null : 1;
    //     let id2 = "class"
    //     let id6 = "numclass"
    //     if (this.state.ChildClass) {

    //         newperson[id2] = null
    //         if (this.state.ChildClass != 1 && this.state.ChildClass != 2 && this.state.ChildClass != 3)
    //             newperson[id6] = 1
    //         else
    //             newperson[id6] = null

    //     }
    //     else {
    //         newperson[id2] = 1
    //         newperson[id6] = null
    //     }

    //     let id3 = "group"
    //     newperson[id3] = (this.state.ChildGroup) ? null : 1;

    //     let id4 = "gname"
    //     newperson[id4] = (this.state.UserName) ? null : 1;

    //     let id5 = "word"
    //     let id8 = "checkword"
    //     if (this.state.Password) {
    //         newperson[id5] = null;
    //         let r = await axios.get('PropertyChildren/CheckIDNo/' + this.state.Password);
    //         alert(r.data)
    //         if (r.data === true)
    //             newperson[id8] = null;
    //         else
    //             newperson[id8] = 1;
    //     }
    //     else {
    //         newperson[id5] = 1;
    //         newperson[id8] = null;
    //     }

    //     this.setState({ user: newperson });

    // }

    // p = async () => {

    //     const ch = {
    //         ChildId: this.state.ChildId,
    //         ChildName: this.state.ChildName,
    //         ChildClass: this.state.ChildClass,
    //         ChildGroup: this.state.ChildGroup,
    //     };
    //     const us = {
    //         UserName: this.state.UserName,
    //         Password: this.state.Password,
    //     };


    //     // if(r.data===true)

    //     // let f= await axios.post('User/AddUser',us).catch((err)=>alert(err)).then((res)=>alert(res.data))

    //     //axios.post('User/AddUser',us).catch((err)=>alert(err)).then(alert('hi'))
    //     //    alert('f')
    //     //   let r;
    //     //  if(f)
    //     //  {
    //     // alert('f.data'+f.data)
    //     //await axios.post('PropertyChildren/AddChildren',ch).catch((err)=>alert(err)).then(alert('bye!'))
    //     //      alert('r.data'+r.data)
    //     //   }
    //     // if(((r!=null && r.data===true) && (f!=null && f.data===true)))
    //     // {
    //     // this.setState({go:true})
    //     // }
    //     //  else
    //     //  {
    //     //     alert(this.state.user.checkid)
    //     ///  }
    //     //if

    //     await axios.post('User/AddUser', us).catch((err) => alert(err))
    //         .then(() => { alert('hiiiii') })
    //         .then(await axios.post('PropertyChildren/AddChildren', ch).catch((err) => alert(err)).then('tgyhtgyh'))

    // }

    // newUserHandler(children) {
    //     axios.post('PropertyChildren/AddChildren', { children }).then(() => { alert('hiiiii') });
    // }
} 

export default withRouter(AddChild);


