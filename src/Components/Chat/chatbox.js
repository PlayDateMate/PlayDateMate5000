import React from "react";
    import './ChatBox.css';
    export default ({ text, username, handleTextChange, id }) => (
      <div className = 'chatBox'>

  
              <input
                className = 'chatInput'
                placeholder="chat here..."
                onChange={handleTextChange}
                onKeyDown={handleTextChange}
              />
       
    </div>
    );