import React, { Component } from 'react';
import './landing.css';
import Geolocation from "react-geolocation";
import Dashboard from '../Dashboard/dashboard.js'
export default class Landing extends Component {
  constructor(props){
    super(props);

    this.state ={
      latitude:'',
      longitude:''
    }
    this.getLocation = this.getLocation.bind(this);
  }
  // componentDidMount(){
  //   this.getLocation();
  // }
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position){
        this.setState({latitude: position.coords.latitude, logitude: position.coords.longitude})
      })
    } else{
      console.log('nope')
    }
  }
    render() {
      <Dashboard latitude = {this.state.latitude} longitude = {this.state.longitude}/>
        return (
          
          <section className='landing'>  
          
               <div className='home_box'>
                 <div className = 'centerbox'>
                   <div className = "title"> Playdate Mate</div>
                     <a id="login_button" className='login_button' href={ process.env.REACT_APP_LOGIN } onClick = {this.getLocation}>LOGIN/SIGNUP</a>
                   </div>
               
               </div>
            </section>
       
                
        )
      }
  }
  


