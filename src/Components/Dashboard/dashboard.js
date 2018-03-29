import React, { Component } from 'react';
import './dashboard.css';




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

