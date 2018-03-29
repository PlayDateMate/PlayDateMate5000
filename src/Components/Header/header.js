import React, { Component } from 'react';
import './header.css';




class Header extends Component {
  constructor(){
    super();

    this.state = {

    }

  }
  

  render() {
    return (
      <div className="Header">
          <div className = "main">
            <Link to = '/dashboard' className ="titleLink"><div className = "title">Playdate Mate</div></Link>
            <a href = {process.env.REACT_APP_LOGOUT}>
                <button className = 'logout'>logout</button>
            </a>
      </div>
    );
  }
}
      </div>
    );
  }
}

export default Header;