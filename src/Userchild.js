import React, { Component } from 'react';
import Signup from './Signup';
import Goodbye from './Goodbye';
import axios from './axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

class Userchild extends Component {
    constructor(props)
    {
        super(props);
    }
    state={
        pass:'',
        name:'',
        louding:true,
    }
    render() 
    {
        
   
      //  +this.props.match.params.value if(this.state.louding===true)
    //<Spinner />
   // else
    //<Signup />this.props.match.params.value
    axios.get('PropertyChildren/GetChild/'+this.props.value).then((res)=>this.setState({pass:res.data}))
    console.log(this.state.pass) 
    axios.get('PropertyChildren/GetUser/'+this.props.value).then((res)=>this.setState({name:res.data}))
   
    if(this.state.louding===true)
    return (<div>
        <p>{this.state.name}</p>
       <Link to='/Goodbye'> <img style={{"height" : "50%", "width" : "50%"}} src={"../children/"+this.state.pass+".png"}  onClick={() => this.childComing(this.state.pass)}/></Link></div>)
       else
       return(<Goodbye/>)
    }
    
    
    //
    // return  <p>jhkjhkjh{this.props.match.params.value}</p>  <Link to='/Signup'></Link>.then(()=>{alert('Bye...')})
    childComing(e)
    {
        debugger;   
        //this.setState({louding:true})
        axios.post('PropertyChildren/Addtimecoming/'+e).then(()=>this.setState({louding:false})).catch(()=>this.setState({louding:true}))
    }
}

export default Userchild;