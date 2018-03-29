import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios'




class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      id: ''

    }

  }
  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            name: response.data[0].user_name,
            id: response.data[0].id
        })
    })
}
  render() {
    return (
      <div className='dashboardMain'>
        <header className='dashboardHeader'>
          <Link to={`/profile/${this.state.id}`}>
            <button>Profile</button>
          </Link>
            Dashboard Header
        </header>
        <div className="dashboardBody">
          <Link to={`/friends/${this.state.id}`}>
            <button>Friends</button>
          </Link>
          <Link to={`/events/${this.state.id}`}>
            <button>Events</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;

