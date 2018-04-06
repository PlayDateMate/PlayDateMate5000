import React, { Component } from 'react';
// import './profile.css';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Children from '../Children/children';
import Header from '../Header/header.js';
import ChildIcon from 'react-icons/lib/fa/child';
import Pusher from 'pusher-js';
import ChatList from './chatlist';
import ChatBox from './chatbox';
import './chat.css';




class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
        friend_id: '',
        user_id: '',
        chats: [],
        text: ''

       
    }  
    this.handleTextChange = this.handleTextChange.bind(this); 
}
componentDidMount(){
    setInterval(()=>{axios.get(`/getchat/${this.props.match.params.id}`).then(response=>{
        console.log('chats???', response)
        this.setState({
            chats: response.data
        })
    })},1000) 
      
    }
    handleTextChange(e) {
        if (e.keyCode === 13) {
          const payload = {
            friend_id: this.props.match.params.id,
            message: this.state.text
          };
          axios.post('/postchat', payload).then(response=>{
              console.log('responses',response)
              this.setState({
                  chats: response.data
              })
          });
        } else {
          this.setState({ text: e.target.value });
        }
      }




render() {

    return (
        <div className = 'chatBody'>
        <Header chat = {this.props.match.params.id}/>
         <ChatList  friend = {this.props.match.params.id}
                    chats={this.state.chats}/>
         <ChatBox   text={this.state.text}
                    id={this.props.match.params.id}
                    handleTextChange={this.handleTextChange}
        />
        </div>
    );
  }
}

export default Chat;