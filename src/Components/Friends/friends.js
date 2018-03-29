import React, { Component } from 'react';
import './friends.css';
import { Link } from 'react-router-dom'
import './friendsSearch'




class Friends extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }
  

  render() {
    return (
      <div className="Friends">
        <header className="main-nav">
          <div>Friends</div>
          <div></div>
        </header>

        <section className="info-section">

                    {/* ROUTES TO FRIEND SEARCH */}
          <Link to='/friendsearch'><button className="find-friends">Find Friends</button></Link>


          <div className="friend-requests">
            <div>Friend Requests</div>
          </div>

          <div className="friend-filter">
            <div>Friends</div>
            <div>Filter</div>
          </div>

        </section>




      
      </div>
    );
  }
}

export default Friends;