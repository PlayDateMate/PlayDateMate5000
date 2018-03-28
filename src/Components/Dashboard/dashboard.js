import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';




class Dashboard extends Component {
  constructor(){
    super();

    this.state = {

    }

  }
  

  render() {
    return (
      <div className='dashboardMain'>
        <header className='dashboardHeader'>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
            Dashboard Header
        </header>
        <div className="dashboardBody">
          <Link to="/friends">
            <button>Friends</button>
          </Link>
          <Link to="/events">
            <button>Events</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;

