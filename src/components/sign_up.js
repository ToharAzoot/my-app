import React, { Component } from 'react'
import axios from '../axios'
import { withRouter } from 'react-router-dom'
import { ADMIN } from '../config'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            error: ''
        }
    }

    render() {
        if (this.props.showLoader) 
            return <h1>Loading...</h1>
        else 
            return (
                <div>
                    <form id="form">
                        <label>סיסמא</label>
                        <input 
                            type="text" 
                            id="Password" 
                            value={this.state.password} 
                            className="input"  
                            onChange={(event) => this.setState({password: event.target.value})}
                        />
                        <p>{this.state.error}</p>
                    </form>
                    <input 
                        type="submit" 
                        className="SubmitSave" 
                        onClick={this.checkPassword} 
                        value="אישור" 
                    />
                </div>
            );
    }

    checkPassword = async () => {
        const password = this.state.password;
        //בודק שהסיסמה מכילה תשע מספרים
        if (password && password.length === 9 && password.match(/^[0-9]+$/)) {
            //אם הסיסמה היא של המנהל, הולך לעמוד של המנהל (הסיסמה של המנהל כתובה בקובץ config)
            if (password === ADMIN) {
                this.props.history.push('/AdministerFirst')
            } else {
                //לוקח את התעודת זהות של הילד מצד שרת
                axios.get(`PropertyChildren/GetChild/${password}`)
                .then(res => {
                    if (res.data) {
                        const childId = res.data;
                        this.props.history.push(`/child/${password}`)
                    } else this.setState({error: 'סיסמה שגויה'})
                })
                .catch(err => console.log('cant check password validation'))
            }
        } else this.setState({error: 'הסיסמה צריכה להיות באורך של תשעה תוים ויכולה להכיל רק מספרים'})
    }

} 

export default withRouter(Signup);


