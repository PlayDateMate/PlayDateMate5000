import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';





class Events extends Component {
  constructor(){
    super();

    this.state = {
      user_id: '',
      
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

        <h5> Invitations <br/> <div className="invitations">
          
        </div> </h5><br />
        <h5> Upcoming Events <br/> <div className="upcoming_events">

        </div> </h5> <br />
        <h5> My Events <br/> <div className="my_events">

        </div> </h5> <br />

      </div>
    );
  }
}

export default Events;