import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdministerFirst extends Component {

    componentWillMount = () => {
        console.log("hello admin"); 
    }

    render() {
        return ( 
            <form>
                <Link to={'/Administer'}><button>סטטוס ילדים במעון</button></Link>
                <Link to={'/AddChild'}><button>להוספת ילד</button></Link>
                <Link to={'/GetChild'}><button>לשנוי פרטי הילד</button></Link>
            </form>
        );
    }
    
} 

export default AdministerFirst;