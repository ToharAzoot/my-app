import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';

import { CommonFunctions, GetFunction, postFunction } from './CommonFunctions';
class Administer extends Component {
  state= {
    list:[],
  }
    render()
    {
    axios.get('PropertyChildren/GetAllChildren').then((res)=>this.setState({list:res.data}))
    console.log(this.state.list)
    //return <p>{this.state.list}</p> 
    //this.setState({ id: '233456146' });
   // axios.get('PropertyChildren/GetStatusComing/233456146').then((res)=>this.setState({i:res.data}))
    //return <p>{this.state.i}</p>
    function f(e)
    {
   if(e==3) 
   return '2px solid yellow'
    if(e==2)
    return '2px solid green'
    return '2px solid blue'
    }
    function d(e) 
    {
      return '2px solid green'
    }
//border={f(e)}
   return <div>{this.state.list.map((e,index)=>{return <div><img style={{"height" : "25%", "width" : "25%", border:f(e.I)}} src={"./children/"+e.ChildId+".png"} /></div>})}</div>
    


       
       
           
             
          
      

      // return <p>iji</p>
     //  return list.map(function(e){return <li></li>})
     //  (list as Array<String>).map((s)=>{var d=s.toString(); return})
       
      
      // return <p>ijijj</p>
        //    list.forEach(function(Element)
       // {  
       // <div>
       // <img src="./children/Element.png" />
       // <br/>
       // </div>
        
       //}
     // )
       // )
    }
        
      
}
export default Administer;