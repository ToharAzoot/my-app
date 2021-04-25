import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../axios'

class GetChild extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            error: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange(event) {
        const id = event.target.value;
        if (id.length === 9 && id.match(/^[0-9]+$/))
            this.setState({id: id, error: ''})
        else 
            this.setState({error: 'תעודת הזהות צריכה להכיל תשע ספרות'})
    }
    
    handleSubmit() {
        if (this.state.id) {
            axios.get(`PropertyChildren/Checkifthereislike/${this.state.id}`)
            .then(res => {
                if (res.data) {
                    this.props.history.push(`/Edit/${this.state.id}`)
                } else window.alert('תעודת הזהות של הילד אינה קיימת במערכת')
            })
            .catch(err => console.log(err))
        }
        else this.setState({error: 'יש לוודא שכל השדות מלאים'})
    }

    render() {
        return (
            <div>
                <form id="form">
                    <label>ת"ז ילד</label>
                    <input className="input" onChange={this.onInputChange} />
                    <p>{this.state.error}</p>
                </form>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default withRouter(GetChild)