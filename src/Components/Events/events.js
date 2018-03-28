import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';





class Events extends Component {
  constructor(){
    super();

    this.state = {
      user_id: ''
    }

  }

  onSubmit(event) {
    (this.state.value);
  }
  

  render() {
    return (
      <div className="Events">

        <div className = "event_btns">
          <Link to="createEvent"><button className="create_event_btn" onClick={ () => this.onSubmit() }>Create Event</button></Link>
          <Link to="searchevents"><button className="search_events_btn" onClick={ () => this.onSubmit() }>Search Events</button></Link>
        </div> <br />

        <p> Invitations <br/> <div className="invitations">
          
        </div> </p><br />
        <p> Upcoming Events <br/> <div className="upcoming_events">

        </div> </p> <br />
        <p> My Events <br/> <div className="my_events">

        </div> </p> <br />

      </div>
    );
  }
}

export default Events;