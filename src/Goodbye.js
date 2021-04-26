import React, { Component } from 'react'
import axios from './axios';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import Administer from './Administer';
import './UI/Goodbye.css';
import {connect} from 'react-redux'

class Goodbye extends Component {
  render() {
    return (
      <div className="Goodbye-header">
        <p className="textGoodbye">!!Good-bye </p>
        <Link to='/Signup'>
          <button className="SubmitGoodbye" 
          onClick={()=> { this.props.updateIsAdmin('false'); 
                          this.props.updateIsLogin('false');}}>אישור</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAdmin: state.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIsAdmin: (isAdmin) => {
      console.log('isAdmin fun')
      dispatch({
        type: 'UPDATE_IS_ADMIN',
        payload: {
          isAdmin: isAdmin
        },
      });
    },
    updateIsLogin: (isLogin) => {
      dispatch({
        type: 'UPDATE_IS_LOGIN',
        payload: {
          isLogin: isLogin
        },
      });
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Goodbye);
