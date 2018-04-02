import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from '../Header/header.js'




class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      id: '',
      lat:0,
      lng:0
    }

  }
  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            name: response.data[0].user_name,
            id: response.data[0].id,
            lat: response.data[0].latitude,
            lng: response.data[0].longitude
        })
    })
  
}

componentWillUnmount(){
  
      let location = {
          userId: this.state.id,
          latitude: this.state.lat,
          longitude: this.state.lng
      }
      
      axios.put('http://localhost:3005/api/location', location).then(response =>{
        console.log('location change data',response.data)
      }
  )

}
  render() {
    console.log(this.state)
    return (
      <div className='dashboardMain'>
        <Header dashboard = {this.state.id}/>
        <div className="dashboardBody">
          <div className = "welcome-message"> Welcome, {this.state.name}.</div>
          <Link to={`/friends/${this.state.id}`}>
            <button className = "dashboardButton" id = "friends">Friends</button>
          </Link>
          <Link to={`/events/${this.state.id}`}>
            <button className = "dashboardButton">Events</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;



