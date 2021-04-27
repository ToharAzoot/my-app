import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from './axios';
import Allprop from './Allprop';
import { CommonFunctions, GetFunction, postFunction } from './CommonFunctions';
import './UI/Propertychildren.css';

class Propertychildren extends Component {
    state = {
        children: {
            ChildId: "",
            check: "4"
        }
    }

    render() {
        console.log('child id', this.state.children.ChildId)
        return (
            <div className="propertychildren-header">
                <form id="propertychildren-form" className="form-propertychildren">
                    <div style={{ display: (this.state.children.check ? 'none' : 'block'), color: 'red' }}>הסיסמא איננה מופיעה במערכת </div>
                    <label>ת"ז ילד</label>
                    <input type="char" id="ChildId" className="input" onChange={(event) => this.inputChange(event)} />
                    <div style={{ display: (this.state.children.check ? 'block' : 'none') }}>
                        <Link to={'/Allprop/' + this.state.children.ChildId}>
                            <button id="Userchild" className="SubmitUserChild" onClick={this.handleSubmit}>אישור</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit = async (event) => {
        console.log(this.state.children,'this.state.children')
        let r = await axios.get('PropertyChildren/Getallpropertyc/' + event.target.value)
        let children = this.state.children;
        children["check"] = r.data;
        this.setState({children: children})
    }
    inputChange = async (event) => {
        const newperson = { ...this.state.children };
        const id = event.target.id;
        newperson[id] = event.target.value;
        this.setState({ children: newperson });
    }
}
export default Propertychildren;