import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Goodbye from './Goodbye';
import { withRouter } from 'react-router-dom';
import Signup from './Signup';
import Administer from './Administer';
class AddChild extends Component {

    state = {
        user:{
         id:"",
         checkid:"",
         ifcheckid:"",
         name:"",
         class:"",
         numclass:"",
         group:"",
         gname:"",
         word:"",
         checkword:"",
         },
            go:false,
            
            when:false,

            ChildId:"",
            
            ChildName: "",
           
            ChildClass: "",
            
            ChildGroup: "",
            
            UserName:"",
            
            Password:"",
            
    }


    render() {
      //  if(this.state.go===true)
      //  return(<form>{()=>alert('welcome'+this.state.ChildName)}
      //  <Redirect to={'/Signup'}></Redirect>
      //  </form>);
    //else
    //{
           if( (this.state.user.id!=null || this.state.user.checkid!=null || this.state.user.ifcheckid!=null ||this.state.user.name!=null || this.state.user.class!=null || this.state.user.numclass!=null || this.state.user.checkword!=null || this.state.user.group!=null || this.state.user.word!=null || this.state.user.gname!=null))
        return (
            < div >  
                <form id="form" >
                    <label>ת"ז ילד</label>
                    <input type="char" id="ChildId" className="input" value={this.state.ChildId} onChange={(event) => this.setState({ChildId: event.target.value})} />
                    <div style={{ display: (this.state.user.id ? 'block' :'none'),color:'red'}}>אנא הקש ת"ז ילד</div>
                    <div style={{ display: (this.state.user.checkid ? 'block' :'none'),color:'red'}}>ת"ז אינה תקינה</div>
                    <div style={{ display: (this.state.user.ifcheckid ? 'block' :'none'),color:'red'}}>ילד בעל ת"ז זו כבר קיים במערכת... נסה ת"ז אחרת</div>
                   
                    <label>שם הילד</label>
                    <input type="text" id="ChildName" className="input" value={this.state.ChildName} onChange={(event) => this.setState({ChildName: event.target.value})} />
                    <div style={{ display: (this.state.user.name ? 'block' :'none'),color:'red'}}>אנא הקש שם ילד</div>
              
                    <label>מס' כיתה</label>
                    <input type="char" id="ChildClass" className="input" value={this.state.ChildClass} onChange={(event) => this.setState({ChildClass: event.target.value})} />
                    <div style={{ display: (this.state.user.class ? 'block' :'none'),color:'red'}}>אנא הקש מספר כיתה</div>
                    <div style={{ display: (this.state.user.numclass ? 'block' :'none'),color:'red'}}>אנא הקש מספר כיתה תקינה</div>
                   
                    <label>שם הגננת</label>
                    <input type="text" id="ChildGroup" className="input" value={this.state.ChildGroup} onChange={(event) => this.setState({ChildGroup: event.target.value})} />
                    <div style={{ display: (this.state.user.group ? 'block' :'none'),color:'red'}}>אנא הקש שם גננת</div>
                    
                    <label>שם הורה</label>
                    <input type="text" id="UserName" className="input" value={this.state.UserName} onChange={(event) => this.setState({UserName: event.target.value})} />
                    <div style={{ display: (this.state.user.gname ? 'block' :'none'),color:'red'}}>אנא הקש שם הורה</div>
                    
                    <label>ת"ז הורה</label>
                    <input type="password" id="Password" className="input" value={this.state.Password} onChange={(event) => this.setState({Password: event.target.value})} />
                    <div style={{ display: (this.state.user.word ? 'block' :'none'),color:'red'}}>אנא הקש ת"ז הורה</div>
                    <div style={{ display: (this.state.user.checkword ? 'block' :'none'),color:'red'}}>אנא הקש ת"ז תקינה</div>
                   

                </form>
                <input type="submit" className="SubmitSave" onClick={this.postDataHandler} value="שמור" />
            </div >
        );
        else
        {
      // if(this.state.go!=true)
        return(      
        <form>
         <button id="Userchild" onClick={this.p}>אשר הרשמה</button>
        </form>)
        }
      // else
       // return(<form>{alert('welcome'+this.state.ChildName)}
       //     <Signup /></form>);
        //}
       // }נחיהטךועם8ם
  
            

//onClick={() => this.newUserHandler(this.state)}onSubmit={() => this.newUserHandler(this.state.user)}<Link to={'Administer'}></Link> 
    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }


   // newUserHandler = (user) => { 
   //    debugger;
   //     axios.post('PropertyChildren/AddChildren', user).then(x => {
    //        console.log("sucses! " + x);
   //     })
    //}‏
    postDataHandler = async() => {
        
        const newperson = { ...this.state.user};

        const id ="id" 
        const id7 ="checkid" 
        const id9 ="ifcheckid" 
       if(this.state.ChildId)
       {
            newperson[id] = null;
            let e=await axios.get('PropertyChildren/Checkifthereislike/'+this.state.ChildId);
            alert('e'+e.data)
            if(e.data===false)
            {
            newperson[id9] = null;
            let r=await axios.get('PropertyChildren/CheckIDNo/'+this.state.ChildId);
           alert(r.data)
            if(r.data===true)
            newperson[id7] =null;
            else
            newperson[id7] =1;
            }
            else
            {
                newperson[id9] = 1;
                newperson[id7] =null;

            }
       }
       else
       {
        newperson[id] = 1;
        newperson[id7] = null;
        newperson[id9] = null;
       }
       
        
        
        

        const id1 ="name"
        newperson[id1] = (this.state.ChildName)?null:1;
        const id2 ="class"
        const id6 ="numclass"
        if(this.state.ChildClass)
        {
             
              newperson[id2] =null
              if(this.state.ChildClass!=1 && this.state.ChildClass!=2 && this.state.ChildClass!=3)
              newperson[id6] = 1
              else
              newperson[id6] = null

        }
        else
        {
        newperson[id2] =1
        newperson[id6] =null
        }
        
        const id3 ="group"
        newperson[id3] = (this.state.ChildGroup)?null:1;

        const id4 ="gname"
        newperson[id4] = (this.state.UserName)?null:1;

        const id5 ="word"
        const id8 ="checkword"
        if(this.state.Password)
        {
             newperson[id5] = null;
             let r=await axios.get('PropertyChildren/CheckIDNo/'+this.state.Password);
            alert(r.data)
             if(r.data===true)
             newperson[id8] =null;
             else
             newperson[id8] =1;
        }
        else
        {
         newperson[id5] = 1;
         newperson[id8] = null;
        }

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

      
     // if(r.data===true)
          
   // let f= await axios.post('User/AddUser',us).catch((err)=>alert(err)).then((res)=>alert(res.data))
        
     //axios.post('User/AddUser',us).catch((err)=>alert(err)).then(alert('hi'))
   //    alert('f')
 //   let r;
      //  if(f)
      //  {
         // alert('f.data'+f.data)
   //await axios.post('PropertyChildren/AddChildren',ch).catch((err)=>alert(err)).then(alert('bye!'))
    //      alert('r.data'+r.data)
    //   }
       // if(((r!=null && r.data===true) && (f!=null && f.data===true)))
       // {
       // this.setState({go:true})
       // }
      //  else
      //  {
      //     alert(this.state.user.checkid)
      ///  }
        //if

    await axios.post('User/AddUser', us).catch((err)=>alert(err))
          .then(()=>{alert('hiiiii')})
             .then(await axios.post('PropertyChildren/AddChildren',ch).catch((err)=>alert(err)).then('tgyhtgyh'))
               
    }
    newUserHandler(children) {
        debugger;
        axios.post('PropertyChildren/AddChildren',{children}).then(()=>{alert('hiiiii')});
    }
} export default AddChild ;


