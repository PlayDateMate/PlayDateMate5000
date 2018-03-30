import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.js';
import SearchEvents from './SearchEvents.js'

class Events extends Component {
  constructor(){
    super();

    this.state = {
      myEvents: [], 
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
    }, this.getUserEvents(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.user && nextProps.user){
        // let patientID= this.props.match.params.id; // how to get the id param in the url
        this.getUserEvents(nextProps.user.user_id)
        console.log(nextProps.user);
    }
}

getUserEvents(user_id){
    axios.get(`/api/user/${user_id}/myevents`).then((res) => {
        console.log(res.data)
        this.setState({ myEvents: res.data })
    }).catch((err) => console.log("err", err));
}


  onSubmit(event) {
    (this.state.value);
  }
  

  render() {
    
    const myevents = this.state.myEvents.map((event, i) => {
      return <div>
      <Link key={i} to={`/events/${event.id}`} 
        
        className="pat-tile"><h4>{event.event_name}</h4></Link>
        <div className="age_group"> Age group: {event.age_min} - {event.age_max}</div>

        <div className="date_group" >
          <div className="date_text"> Start Date: {event.start_date}</div>
          <div className="date_text">End Date: {event.end_date}</div>
        </div>

      </div>
    })

    return (
      <div className="Events">
        <Header events = {this.state.user_id}/>
        <div className = "event_btns">
          <Link to={`/createEvent/${this.state.user_id}`}><button className="events_buttons" onClick={ () => this.onSubmit() }>Create Event</button></Link>
          <Link to={`/searchevents/${this.state.user_id}`}><button className="events_buttons" onClick={ () => this.onSubmit() }>Search Events</button></Link>
        </div> <br />

        <div> Invitations <br/> <div className="invitations">
          
        </div> </div><br />
        <div> Upcoming Events <br/> <div className="upcoming_events">

          <div className="own_events">
            <div className="my_events">
              {myevents}
              <button>View Event</button>
            </div>
          </div> 

        </div> </div> <br />

        <div> 
          <div>My Events </div> 
          <div className="own_events">
            <div className="my_events">
              {myevents}
              <button>View Event</button>
            </div>
          </div> 
        </div>

      </div>
    );
  }
}

export default Events;