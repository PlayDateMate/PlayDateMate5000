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
      id: ''
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
}

  render() {
    return (
      <div className="Friends">
        <Header Friends = {this.state.id}/>

        <section className="info-section">

                    {/* ROUTES TO FRIEND SEARCH */}
          <Link to={`/friendsearch/${this.state.id}`}><button className="friends-button">Find Friends</button></Link>


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