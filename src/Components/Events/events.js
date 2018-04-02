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
      getAttendingEvent: [],
      eventRequestReceived: [], 
      user_id: '',
      user_name: ''
    }
  }

  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)

    // if (this.props.user){
    //     this.getUserEvents(this.props.user.user_id)
    //     console.log(this.state);
    //     console.log(this.props.user);
    // }
        this.setState({
            user_name: response.data[0].user_name,
            user_id: response.data[0].id
        })
    }, this.getUserEvents(this.props.match.params.id))

    axios.get('/getAttendingEvent').then((response) => {
      console.log('get friends', response)
      this.setState({
        getAttendingEvent: response.data
      })
    })
    axios.get('/receivedEventRequest').then((response)=>{
      console.log('get received', response)
      this.setState({
        eventRequestReceived: response.data
      })
    })
  
    
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

acceptEventInvite(id){
  axios.put('/accepteventinvite',{sender:id}).then(()=>{
    alert('You have accepted to attend this event')
    axios.get('/getFriends').then((response) => {
      console.log('get friends', response)
      this.setState({
        getFriends: response.data
      })
    })
  })
}
denyEventInvite(id){
  axios.put('/denyeventinvite',{sender:id}).then(()=>{
    alert('You will not be attending this event')
    axios.get('/getFriends').then((response) => {
      console.log('get friends', response)
      this.setState({
        getFriends: response.data
      })
    })
  })
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
                <div>
                <button>View Event</button>
                <button>Delete Event</button>
                <button>Invite Friends</button>
                </div>
            </div>
          </div> 

        </div> </div> <br />

        <div> 
          <div>My Events </div> 
          <div className="own_events">
            <div className="my_events">
              {myevents}
                <button className="my_events_btns">View Event</button>
                <button className="my_events_btns">Delete Event</button>
                <button className="my_events_btns">Invite Friends</button>
            </div>
          </div> 
        </div>

      </div>
    );
  }
}

export default Events;