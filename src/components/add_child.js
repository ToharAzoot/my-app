import React, { Component, useEffect } from 'react'
import axios from '../axios';

class AddChild extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            class: '',
            group: '',
            name: '',
            user: '',
            Password: '',
            idError: '',
            classError: '',
            groupError: '',
            nameError: '',
            passworError: '',
            userError: '',
            submitError: ''
        }
        this.onIdChange = this.onIdChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onClassChange = this.onClassChange.bind(this);
        this.onGroupChange = this.onGroupChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onIdChange(event) {
        const id = event.target.value;
        if (id.length === 9 && id.match(/^[0-9]+$/)) {
            this.setState({id: id});
            this.setState({idError: ''})
        }
        else
            this.setState({idError: 'תעודת הזהות צריכה להכיל תשע ספרות'})
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
        if (state.id && state.name || state.class || state.group || state.user || state.Passwor) {
            console.log(state.id)
            axios.get(`PropertyChildren/Checkifthereislike/${state.id}`)
            .then(res => {
                if (!res.data) {
                    const child = {
                        ChildId: parseInt(state.id),
                        ChildName: state.name,
                        ChildClass: parseInt(state.class),
                        ChildGroup: state.group
                    }
                    const user = {
                        UserName: state.name,
                        Password: state.Password
                    }
                    this.addUserAndChild(child, user);
                } else window.alert('תעודת הזהות של הילד קיימת במערכת')
            })
            .catch(err => console.log(err))
        }
        else this.setState({submitError: 'יש לוודא שכל השדות מלאים'})
    }

    addUserAndChild(child, user) {
        axios.post('User/AddUser', user)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        //there is a problem here to add a child
        axios.post('PropertyChildren/AddChildren', child)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <form id="form">
                    <label>ת"ז ילד</label>
                    <input className="input" onChange={this.onIdChange} />
                    <div>{this.state.idError}</div>
                    <label>שם הילד</label>
                    <input className="input" onChange={this.onNameChange} />
                    <div>{this.state.nameError}</div>
                    <label>מס' כיתה</label>
                    <input className="input" onChange={this.onClassChange} />
                    <div>{this.state.classError}</div>
                    <label>שם הגננת</label>
                    <input className="input" onChange={this.onGroupChange} />
                    <div>{this.state.groupError}</div>
                    <label>שם ההורה</label>
                    <input className="input" onChange={this.onUserChange} />
                    <div>{this.state.userError}</div>
                    <label>ת"ז הורה</label>
                    <input className="input" onChange={this.onPasswordChange} />
                    <div>{this.state.passworError}</div>
                </form>
                <div>{this.state.submitError}</div>
                <input type="submit" className="SubmitSave" value="שמור" onClick={this.handleSubmit}/>
            </div>
        );
    }
} 

export default AddChild ;
