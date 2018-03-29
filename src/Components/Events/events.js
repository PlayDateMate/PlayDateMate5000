import React, { Component } from 'react';
import './events.css';
import { Link } from 'react-router-dom';
import axios from 'axios';





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
      return <Link key={i} to={`/events/${event.id}`} className="pat-tile"><h1>{event.event_name} ></h1></Link>
    })

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
        <h5> My Events <br/> <div className="own_events">
          <div className="my_events">
              {myevents}
          </div>

        </div> </h5> <br />

      </div>
    );
  }
}

export default Events;