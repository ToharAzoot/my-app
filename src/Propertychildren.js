import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Allprop from './Allprop';
import { CommonFunctions, GetFunction, postFunction } from './CommonFunctions';
class Propertychildren extends Component {

    state = {
        children:{
            ChildId: "",
            check:"4"
        }
    }
    render()
    {
        return (
            < div >
                <form id="form" >
                <div style={{ display: (this.state.children.check ? 'none' :'block') ,color:'red'}}>הסיסמא איננה מופיעה במערכת </div>
                    <label>ת"ז ילד</label>
                    <input type="char" id="ChildId" className="input" onChange={(event) => this.inputChange(event)} />  
                    <div style={{ display: (this.state.children.check ? 'block':'none')}}><Link to={'/Allprop/'+this.state.children.ChildId}> <button id="Userchild">אישור</button></Link></div>
                </form>
              
              
            </div >
        );
    }
    inputChange = async(event) => { 

        const newperson = { ...this.state.children};
        const id = event.target.id;
        newperson[id] = event.target.value;
        const id1="check"
        let r=await axios.get('PropertyChildren/Getallpropertyc/'+event.target.value)
        newperson[id1]=r.data;
        //console.log(r.data.ChildName)
        this.setState({ children: newperson }); 
    }
}
export default Propertychildren;