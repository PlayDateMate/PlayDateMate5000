import React, { Component } from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom'
import axios from 'axios'




class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      id: ''

    }

  }
  async componentWillMount(){
    await axios.get('/getUserInfo/').then((response)=>{
      console.log("herro",response)
        this.setState({
            name: response.data[0].user_name,
            id: response.data[0].id
        })
    })
}
  

  render() {
    return (
      <div className="Dashboard">
        
      </div>
    );
  }
}

export default Dashboard;

