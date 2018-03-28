import React, { Component } from 'react';
import './landing.css';

export default class Landing extends Component {
    render() {
        
        return (
                <section className='App'>  
               
                    <div className='home_box'>

                        <a id="login_button" className='login_button' href={ process.env.REACT_APP_LOGIN }>LOGIN</a>

                    </div>
                 </section>
        )
    }
}