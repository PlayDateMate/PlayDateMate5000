import React, { Component } from 'react';
import './friends.css';
import { Link } from 'react-router-dom'
import './friendsSearch'
import axios from 'axios'
import Header from '../Header/header.js'
import viewProfile from '../ViewProfile/viewProfile';
import Chat from '../Chat/chat'

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
    this.acceptFriend = this.acceptFriend.bind(this);
    this.denyFriend == this.denyFriend.bind(this);
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
      console.log('get sent',response)
      this.setState({
          requestsSent: response.data

      })
    })

            /*===== GET CURRENT FRIENDS =====*/
    axios.get('/getFriends').then((response) => {
      console.log('get friends', response)
      this.setState({
        getFriends: response.data
      })
    })
                    /*===== END =====*/

    axios.get('/receivedRequests').then((response)=>{
      console.log('get received', response)
      this.setState({
        requestsReceived: response.data
      })
    })
}



acceptFriend(id){
  axios.put('/acceptfriend',{sender:id}).then(()=>{
    alert('You have accepted this friend')
    axios.get('/getFriends').then((response) => {
      console.log('get friends', response)
      this.setState({
        getFriends: response.data
      })
    })
  })
}
denyFriend(id){
  axios.put('/denyfriend',{sender:id}).then(()=>{
    alert('You have accepted this friend')
    axios.get('/getFriends').then((response) => {
      console.log('get friends', response)
      this.setState({
        getFriends: response.data
      })
    })
  })
}

  render() {
    
   
    
    <viewProfile id={this.state.id}/>
  
      const sentRequests = this.state.requestsSent.map((friend, i)=>{
        return(
          <div key = {i} className = "sent">
            <div className = "sentName">{friend.user_name}</div>
            <button className = "cancel">cancel</button>
          </div>
        )
      })

      const friends = this.state.getFriends.map((friend, i) => {
        <Chat user_id={this.state.id} friend_id={friend.id} />
        return (
          <div key = {i} className = "friend" id ='listfriend'>
            <img className = "friendProfilePicture" src={friend.image}/>
            {friend.user_name}
            <Link to={`/chat/${friend.id}`}>
            <button className = "viewProfile">Chat</button> 
            </Link>
            <Link to={`/viewprofile/${friend.id}`}>
            <button className = "viewProfile">View Profile</button> 
            </Link>
          </div>
        )
      })
      const received = this.state.requestsReceived.map((request, i)=>{
        return(
          <div key ={i} className = "received">
            {request.user_name}
            <a href="javascript:location.reload(true)"><button className = "received-buttons"onClick={()=>this.acceptFriend(request.id)}>Accept</button></a>
            <a href="javascript:location.reload(true)"><button className = "received-buttons"onClick={()=>this.denyFriend(request.id)}>Deny</button></a>
          </div>
        )
      })

    return (
      <div className="Friends">
        <Header Friends = {this.state.id}/>
        <section className='body'>

          <Link to={`/friendsearch/${this.state.id}`} id="id"><button className="find-friends-button">Find Friends</button></Link>
        <div className = "requests">
          <div className = 'requestsTitle'>Requests</div>
          <div className = "requestsBody">
            <div className="sent-friend-requests">
              <div className = "sentTitle">Sent</div>
                {sentRequests}
              </div>
            <div className="recieved-friend-requests">
               <div className = "receivedTitle">Recieved</div>
              {received}
          </div>
        </div>
          </div>
          
          <div className="list-friends">
            <div className = "list-friends-title">Friends</div>
            {/* <div>Filter</div> */}
            {friends}
          </div>
        

        </section>

      </div>
    );
  }
}

export default Friends;