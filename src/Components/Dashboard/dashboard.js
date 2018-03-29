import React, { Component } from 'react';
import './dashboard.css';




class Dashboard extends Component {
  constructor(){
    super();

    this.state = {

    }

  }
  

  render() {
    console.log(this.props.latitude)
    return (
      <div className="Dashboard">
        
      </div>
    );
  }
}

export default Dashboard;

