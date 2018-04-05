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
    axios.get(`/getchat/${this.props.match.params.id}`).then(response=>{
        console.log('chats???', response)
        this.setState({
            chats: response.data
        })
    })
    // const pusher = new Pusher(process.env.REACT_APP_CHAT_KEY, {
    //     cluster: process.env.REACT_APP_CLUSTER,
    //     encrypted: true
    //   });
    //   const channel = pusher.subscribe('chat');
    //   channel.bind('message', data => {
    //     this.setState({ chats: [...this.state.chats, data], test: '' });
    //   });
      
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
        <div>
         <ChatList chats={this.state.chats}/>
         <ChatBox   text={this.state.text}
                    id={this.props.match.params.id}
                    handleTextChange={this.handleTextChange}
        />
        </div>
    );
  }
}

export default Chat;