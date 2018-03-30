import React, { Component } from 'react';
import './friends.css';
import { Link } from 'react-router-dom'
import './friendsSearch'
import axios from 'axios'
import Header from '../Header/header.js'

class Friends extends Component {
  constructor(){
    super();

    this.state = {
      user_name: '',
      id: '',
      requestsReceived: [],
      requestsSent: [],
      getFriends: []
    }
  }
  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            user_name: response.data[0].user_name,
            id: response.data[0].id
        })
    })
    axios.get('/getsent').then((response)=>{
      console.log(response)
      this.setState({
          requestsSent: response.data

      })
    })

    axios.get('/getFriends').then((response) => {
      console.log(response)
      this.setState({
        getFriends: response.data
      })
    })
}

  render() {
      const sentRequests = this.state.requestsSent.map((friend, i)=>{
        return(
          <div>
            {friend.user_name}
            <button>cancel</button>
          </div>
        )
      })

      const friends = this.state.getFriends.map((friend, i) => {
        return (
          <div>
            <img className = "profilePicture" src={friend.image}/>
            {friend.user_name}
            <button>View Profile</button>
          </div>
        )
      })

    return (
      <div className="Friends">
        <Header Friends = {this.state.id}/>
        <section className="info-section">

          <Link to={`/friendsearch/${this.state.id}`}><button className="friends-button">Find Friends</button></Link>

          <div className="friend-requests">
            <div>Friend Requests</div>
            {sentRequests}
          </div>

          <div className="friend-filter">
            <div>Friends</div>
            <div>Filter</div>
            {friends}
          </div>

        </section>

      </div>
    );
  }
}

export default Friends;