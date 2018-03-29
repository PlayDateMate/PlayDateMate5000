import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';
import axios from 'axios';





class Events extends Component {
  constructor(){
    super();

    this.state = {
      user_id: '',
      user_name: ''
    }

  }

  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            user_name: response.data[0].user_name,
            user_id: response.data[0].id
        })
    })
}

  onSubmit(event) {
    (this.state.value);
  }
  

  render() {
    return (
      <div className="Events">

        <div className = "event_btns">
          <Link to={`/createEvent/${this.state.user_id}`}><button className="create_event_btn" onClick={ () => this.onSubmit() }>Create Event</button></Link>
          <Link to={`/searchevents/${this.state.user_id}`}><button className="search_events_btn" onClick={ () => this.onSubmit() }>Search Events</button></Link>
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