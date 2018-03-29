import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import ProfileIcon from 'react-icons/lib/fa/user';



class Header extends Component {
  
  

  render() {
    return (
      <div className="Header">
          <div className = "main">
            {this.props.dashboard ?
            <div className = "header-body">
              <Link to = {`/profile/${this.props.dashboard}`}><ProfileIcon size ={30} color ={'white'}/></Link>
              <div className = "header-title">Dashboard</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
            <div className = "header-title">Playdate Mate</div>
            }
           
      </div>
      </div>
    );
  }
}

export default Header;