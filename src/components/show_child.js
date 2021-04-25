import React, { Component } from 'react'
import axios from '../axios'
import { withRouter } from 'react-router-dom'

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            childId: ''
        }
        this.setChildIn = this.setChildIn.bind(this);
    }

    componentDidMount() {
        //לוקח את התעודת זהות מהכתובת ומחזיר פרטים של ההורה והילד
        const userId = window.location.href.split('/').pop();
        axios.get(`/PropertyChildren/GetChild/${userId}`)
        .then(res => this.setState({childId: res.data}))
        .catch(err => console.log('could not get child', err))

        axios.get(`/PropertyChildren/GetUser/${userId}`)
        .then(res => this.setState({title: res.data}))
        .catch(err => console.log('could not get user', err))
    }

    setChildIn() {
        //מוסיף את הילד לרשימה של הילדים שהגיעו לגן
        //בפונקציה הזאת יש בעיה בצד שרת
        axios.post(`PropertyChildren/Addtimecoming/${this.state.childId}`)
        .then(res => {
            console.log(res);
            this.props.history.push('/Goodbye');
        })
        .catch(err => console.log('could not enter child ', err))
        this.props.history.push('/Goodbye');
    }

    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <img 
                    src={`../../children/${this.state.childId}.png`} 
                    alt={this.state.childId}
                    onClick={this.setChildIn}
                />
            </div>
        );
    }
}

export default withRouter(Child);