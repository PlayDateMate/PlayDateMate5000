import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom'
import ProfileIcon from 'react-icons/lib/fa/user';
import DashboardIcon from 'react-icons/lib/fa/home';
import BackButton from 'react-icons/lib/fa/chevron-left';



class Header extends Component {
  constructor(props){
    super(props)

    this.state ={
      id:null
    }
  };
  

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
              this.props.profile?
              <div className = "header-body">
              <Link to = {`/dashboard`}><DashboardIcon size ={30} color ={'white'}/></Link>
              <div className = "header-title">Profile</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.events? 
              <div className = "header-body">
              <Link to = {`/dashboard`}><DashboardIcon size ={30} color ={'white'}/></Link>
              <div className = "header-title">Events</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.searchEvents?
              <div className = "header-body">
              <Link to = {`/events/${this.props.searchEventsId}`}><BackButton size ={30} color ={'white'}/></Link>
              <div className = "header-title">Search Events</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.CreateEvent?
              <div className = "header-body">
              <Link to = {`/events/${this.props.CreateEvent}`}><BackButton size ={30} color ={'white'}/></Link>
              <div className = "header-title">Create Event</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.Friends ?
              <div className = "header-body">
              <Link to = {'/dashboard'}><DashboardIcon size ={30} color ={'white'}/></Link>
              <div className = "header-title">Friends</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.SearchFriends ?
              <div className = "header-body">
              <Link to = {`/friends/${this.props.SearchFriends}`}><BackButton size ={30} color ={'white'}/></Link>
              <div className = "header-title">Find Friends</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.child ?
              <div className = "header-body">
              <Link to = {`/profile/${this.props.child}`}><BackButton size ={30} color ={'white'}/></Link>
              <div className = "header-title">Child</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :
              this.props.addChild ?
              <div className = "header-body">
              <Link to = {`/profile/${this.props.addChild}`}><BackButton size ={30} color ={'white'}/></Link>
              <div className = "header-title">Add Child</div>     
              {/* <a href = {process.env.REACT_APP_LOGOUT}> */}
            <button className = 'logout'>logout</button>
              {/* </a> */}</div>
              :

            null
            }
           
      </div>
      </div>
    );
  }
}

export default Header;