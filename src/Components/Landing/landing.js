import React, { Component } from 'react';
import './landing.css';
import bubbles from './bubbles.jpg'

export default class Landing extends Component {
        


    render() { 
          
        return (
          
          <section className='landing'>  
          
               <div className='home_box'>
                   <div className = 'centerbox'>
                   <div className = "title">Playdate Mate</div>
                   <a id="login_button" className='login_button' href={ process.env.REACT_APP_LOGIN }>LOGIN</a>
                   </div>
    
               </div>
            </section>
        )
    }

  }
  


