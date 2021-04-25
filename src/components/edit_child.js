import React, { Component, useEffect } from 'react'
import axios from '../axios';

class EditChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            class: '',
            group: '',
            user: '',
            password: '',
            idError: '',
            classError: '',
            groupError: '',
            nameError: '',
            passworError: '',
            userError: '',
            submitError: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onClassChange = this.onClassChange.bind(this);
        this.onGroupChange = this.onGroupChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const id = window.location.href.split('/').pop();
        console.log(id)
        await axios.get(`User/Getallpropertyd/${id}`)
        .then(res => {
            this.setState({user: res.data.UserName})
            this.setState({password: res.data.Password})
            //get the child information and set the state
            axios.get(`/PropertyChildren/GetChild/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    onNameChange(event) {
        const name = event.target.value;
        if (name.length > 50) 
            this.setState({nameError: 'שם ארוך מידי'})
        else {
            this.setState({name: name})
            this.setState({nameError: ''})
        }
    }

    onClassChange(event) {
        const _class = event.target.value;
        if (_class.match(/^[0-9]+$/)) {
            this.setState({class: _class})
            this.setState({classError: ''})
        }
        else 
            this.setState({classError: 'יש להכניס מספר'})
    }

    onGroupChange(event) {
        const group = event.target.value;
        if (group.length > 50) 
            this.setState({groupError: 'שם הגננת ארוך מידי'})
        else 
            this.setState({group: group})
    }

    onUserChange(event) {
        const user = event.target.value;
        if (user.length > 50) 
            this.setState({userError: 'שם ארוך מדי'})
        else {
            this.setState({user: user})
            this.setState({userError: ''})
        }
    }

    onPasswordChange(event) {
        const password = event.target.value;
        if (password.length === 9 && password.match(/^[0-9]+$/)) {
            this.setState({Password: password});
            this.setState({passworError: ''})
        }
        else
            this.setState({passworError: 'תעודת הזהות צריכה להכיל תשע ספרות'})
    }

    handleSubmit() {
        const state = this.state;
        if (state.name && state.class && state.group && state.parent && state.parentId) {

        } else window.alert('יש למלא את כל השדות')
    }

    render() {
        return (
            <div>
                <form id="form">
                    <label>שם הילד</label>
                    <input className="input" value={this.state.name} onChange={this.onNameChange}/>
                    <div>{this.state.nameError}</div>
                    <label>מס' כיתה</label>
                    <input className="input" value={this.state.class} onChange={this.onClassChange}/>
                    <div>{this.state.classError}</div>
                    <label>שם הגננת</label>
                    <input className="input" value={this.state.group} onChange={this.onGroupChange}/>
                    <div>{this.state.groupError}</div>
                    <label>שם הורה</label>
                    <input className="input" value={this.state.user} onChange={this.onUserChange}/>
                    <div>{this.state.userError}</div>
                    <label>ת"ז הורה</label>
                    <input className="input" value={this.state.password} onChange={this.onPasswordChange}/>
                    <div>{this.state.passworError}</div>
                    <input type="submit" onClick={this.handleSubmit} value="שמור"/>
                </form>
            </div>
        )
    }
}

export default EditChild