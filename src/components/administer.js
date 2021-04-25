import React, { Component } from 'react'
import axios from '../axios'

class Administer extends Component {
  
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('PropertyChildren/GetAllChildren')
    .then(res => this.setState({list: res.data}))
    .catch(err => console.log('could not get children list ', err))
  }

  render () {
    return (
      <table>
        <tr>
          <th>תעודת זהות</th>
          <th>שם</th>
          <th>כיתה</th>
          <th>קבוצה</th>
          <th>תמונה</th>
        </tr>
        {
          this.state.list.map((child) => {
            return (
                <tr>
                  <td>{child.ChildId}</td>
                  <td>{child.ChildName}</td>
                  <td>{child.ChildClass}</td>
                  <td>{child.ChildGroup}</td>
                  <td><img src={`../children/${child.ChildId}.png`} alt={child.ChildId}/></td>
                </tr>
            )
          })
        }
      </table>
    );
  } 
}
export default Administer;