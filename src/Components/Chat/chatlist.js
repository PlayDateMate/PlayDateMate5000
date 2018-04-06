import React from "react";
import "./ChatList.css";

export default ({ chats , friend}) => (
  <div>
    {chats.map(chat => {
      return (
        <div className = 'chatList'>
          {console.log('userId from chatlist',chat)}
          {chat.receiver_id == friend ?

          <div className = 'currentMsg'>
                <div key={chat.id}>
                <div>{chat.message}</div>
              </div>
          </div>
            
          :

          <div className = "friendMsg">
              <div key={chat.id}>
              <div>{chat.message}</div>
             
            </div>
          </div>
            
          }
        </div>
      );
    })}
  </div>
);