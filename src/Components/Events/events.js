import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.js';
import SearchEvents from './SearchEvents.js'
// import FriendInvite from './FriendInvites'

class Events extends Component {
  constructor(){
    super();

    this.state = {
      myEvents: [],
      myEventsAndUpcoming: [],
      eventRequestSent: [],
      eventRequestReceived: [], 
      getAttendingEvent: [],
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

<<<<<<< HEAD
    axios.get('/eventRequestSent').then((response)=>{
      console.log('get sent',response)
=======
    axios.get('/getAttendingEvent').then((response) => {
      console.log('get friends', response.data)
>>>>>>> master
      this.setState({
          eventRequestSent: response.data

      })
    })

    axios.get('/receivedEventRequest').then((response)=>{
<<<<<<< HEAD
      console.log('event invite received', response)
=======
      console.log('get received', response.data)
>>>>>>> master
      this.setState({
        eventRequestReceived: response.data
      })
    })
<<<<<<< HEAD

    axios.get('/getAttendingEvent').then((response) => {
      console.log('attending event', response)
      this.setState({
        getAttendingEvent: response.data
      })
    })
=======
  
    
>>>>>>> master
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

getUserEventsAndUpcoming(user_id){
  axios.get(`/api/user/${user_id}/myeventsandupcoming`).then((res) => {
      console.log(res.data)
      this.setState({ myEventsAndUpcoming: res.data })
  }).catch((err) => console.log("err", err));
}

deleteEvent(){
  console.log("Testtest", this.props.match.params.id);
  axios.delete(`/api/event/${this.props.match.params.id}`).then(response => {
  console.log("Something response")
  }).catch(console.log)
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
      return (
<<<<<<< HEAD
      
        <div>
          <div className="event_info">
            <Link key={i} to={`/events/${event.id}`} className="pat-tile"><h4>{event.event_name}</h4></Link>
            <div className="event_text"> Age group: {event.age_min} - {event.age_max}</div>
            <div className="event_text"> Start Date: {event.start_date}</div>
            <div className="event_text">End Date: {event.end_date}</div>
          </div>
    
          <div>
            <button className="event_actions_btns">View Event</button>
            <button className="event_actions_btns" onClick={()=> {this.deleteEvent(event.id)}}>Delete Event</button>
            <button className="event_actions_btns">Invite Friends</button>
          </div>

=======
      <div>
        <Link key={i} to={`/events/${event.id}`} className="pat-tile">
          <h4>{event.event_name}</h4>
        </Link>
        <div className="age_group" id="minAge">Age group: {event.age_min} - {event.age_max}</div>

        <div className="date_group" >
          <div className="date_text" id="startDate">Start Date: {event.start_date}</div>
          <div className="date_text" id='endDate'>End Date: {event.end_date}</div>
>>>>>>> master
        </div>
      )
    })

<<<<<<< HEAD
    const myeventplusupcoming = this.state.myEventsAndUpcoming.map((event, i) => {
      return (
      
        <div>
          <div className="event_info">
            <Link key={i} to={`/events/${event.id}`} className="pat-tile"><h4>{event.event_name}</h4></Link>
            <div className="event_text"> Age group: {event.age_min} - {event.age_max}</div>
            <div className="event_text"> Start Date: {event.start_date}</div>
            <div className="event_text">End Date: {event.end_date}</div>
          </div>
    
          <div>
            <button className="event_actions_btns">View Event</button>
            <button className="event_actions_btns" onClick={()=> {this.deleteEvent(event.id)}}>Delete Event</button>
            <button className="event_actions_btns">Invite Friends</button>
          </div>

        </div>
      )
    })

    const sentRequests = this.state.eventRequestSent.map((event, i)=>{
      return(
        <div key = {i}>
          {event.event_name}
          <button>cancel</button>
        </div>
      )
    })

    const receivedRequests = this.state.eventRequestReceived.map((request, i)=>{
      return(
        <div key ={i}>
          {request.event_name}
          {request.user_name}
          <button className="accept_deny_btn" onClick={()=>this.acceptEventInvite(request.event_id)}>Accept</button>
          <button className="accept_deny_btn" onClick={()=>this.denyEventInvite(request.id)}>Deny</button>
        </div>
      )
    })

    const attendingEvent = this.state.getAttendingEvent.map((friend, i) => {
      return (
        <div key = {i} className = "friend">
          {friend.user_name}
          <button className = "viewProfile">View Profile</button>
        </div>
=======
        <div>
          <Link to={`/friendinvites/${event.id}`}><button className="my_events_btns">Invite Friends</button></Link>
          <button className="my_events_btns">View Event</button>
          <button className="my_events_btns">Delete Event</button>
        </div>
      </div>
>>>>>>> master
      )
    })


    return (
      <div className="Events">
        <Header events = {this.state.user_id}/>
        <div className = "event_btns">
          <Link to={`/createEvent/${this.state.user_id}`}><button className="events_buttons" onClick={ () => this.onSubmit() }>Create Event</button></Link>
          <Link to={`/searchevents/${this.state.user_id}`}><button className="events_buttons" onClick={ () => this.onSubmit() }>Search Events</button></Link>
        </div> <br />

        <div> Invitations <br/> <div className="invitations">
            {receivedRequests}
          
        </div> </div><br />
        <div> Upcoming Events <br/> <div className="upcoming_events">

          <div className="own_events">
            <div className="my_events">
              {myevents}
<<<<<<< HEAD
              {myeventplusupcoming}
=======
                <div>
                <button>View Event</button>
                <button>Delete Event</button>
                <button>Invite</button>
                </div>
>>>>>>> master
            </div>
          </div> 

        </div> </div> <br />

        <div> 
          <div>My Events </div> 
          <div className="own_events">
            <div className="my_events">
              {myevents}
<<<<<<< HEAD
              {myeventplusupcoming}
=======
>>>>>>> master
            </div>
          </div> 
        </div>

      </div>
    );
  }
}

export default Events;