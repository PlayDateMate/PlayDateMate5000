import React, { Component } from 'react';
import './profile.css';
import {Link } from 'react-router-dom';



class profile extends Component {
  constructor(){
    super();

    this.state = {

    }

  }
  

  render() {
    return (
      <div className='profileMain'>
        <header className='profileHeader'>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
            Profile Header
        </header>
        <div className="profileBody">
          
          There will be things in here...
        </div>
      </div>
    );
  }
}

export default profile;