import React, { Component } from 'react';
import './CreateEvent.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/header.js';


export default class CreateEvent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            event_name: '',
            event_description: '',
            start_date: '',
            end_date: '',
            age_min: '',
            age_max: '',
            address: '',
            city: '',
            zipcode: '',
            privacy: '',
            user_id: '',
            events: [],
            getFriends:[]
        }

    this.onSubmit = this.onSubmit.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.descriptionInput = this.descriptionInput.bind(this);
    this.startdateInput = this.startdateInput.bind(this);
    this.enddateInput = this.enddateInput.bind(this);
    this.minageInput = this.minageInput.bind(this);
    this.maxageInput = this.maxageInput.bind(this);
    this.addressInput = this.addressInput.bind(this);
    this.cityInput = this.cityInput.bind(this);
    this.zipcodeInput = this.zipcodeInput.bind(this);
    this.privacyInput = this.privacyInput.bind(this);

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
        axios.post('/api/events', {
            event_name: this.state.event_name, 
            event_description: this.state.event_description, 
            start_date: this.state.start_date, 
            end_date: this.state.end_date, 
            age_min: this.state.age_min, 
            age_max: this.state.age_max, 
            address: this.state.address, 
            city: this.state.city, 
            zipcode: this.state.zipcode,
            user_id: this.props.match.params.id, 
            privacy: this.state.privacy
            })
            .then((resp) => {
            console.log('data base data',resp.data);
            // this.setState({events: resp.data})
            // this.props.history.push('/events')
                return resp.data
            }).catch(console.log);
        }

        nameInput(val) {
            console.log(val);
            this.setState({
                event_name: val
            })
            console.log("StateName:", this.state.event_name)
        }
        descriptionInput(val) {
            console.log(val);
            this.setState({
                event_description: val
            })
        }
    
        startdateInput(val) {
            console.log(val);
            this.setState({
                start_date: val
            })
        }
        enddateInput(val) {
            console.log(val);
            this.setState({
                end_date: val
            })
        }
        minageInput(val) {
            console.log(val);
            this.setState({
                age_min: val
            })
        }
        maxageInput(val) {
            console.log(val);
            this.setState({
                age_max: val
            })
        }
        addressInput(val) {
            console.log(val);
            this.setState({
                address: val
            })
        }
        cityInput(val) {
            console.log(val);
            this.setState({
                city: val
            })
        }
        zipcodeInput(val) {
            console.log(val);
            this.setState({
                zipcode: val
            })
        }
        privacyInput(val) {
            console.log(val);
            this.setState({
                privacy: val
            })
        }

         


    render() {
               
        return(
            <div className="Create_Event">
                <div className = "body">
                <Header CreateEvent = {this.state.user_id}/> 
                <div onSubmit={this.onSubmit}>

                <div className = "description">
                    <label>Event Name<input className = "name_input" placeholder="Event Name" onChange={(e) => this.nameInput(e.target.value)} type="text" /></label>
                   <label> Event Description<input className = "desc_input"placeholder="Event Description" onChange={(e) => this.descriptionInput(e.target.value)} type="text" /> </label>
                </div>   
                       
                    <div className="dates">
                        <label>Start Date<input type="date" onChange={(e) => this.startdateInput(e.target.value)} /></label>
                        <label>End Date<input className = "date"placeholder="End Date" type="date" onChange={(e) => this.enddateInput(e.target.value)} /></label>
                    </div>
                    <div className="ages">
                        <label>Min Age<input className="age" placeholder="0-12" onChange={(e) => this.minageInput(e.target.value)} type="text" /> </label>
                        <label>Max Age<input className="age" placeholder="0-12" onChange={(e) => this.maxageInput(e.target.value)} type="text" /> </label>
                    </div>
                    <div className = "address_location">
                        <label>Address or Location<input className="address" placeholder="address" onChange={(e) => this.addressInput(e.target.value)} type="text" /></label>  
                    </div>
                    
                    <div className="city_zipcode">
                    <label>City<input className="zip_city" placeholder="City" onChange={(e) => this.cityInput(e.target.value)} type="text" /></label>
                    <label>Zipcode<input className="zip_city" placeholder="Zipcode" onChange={(e) => this.zipcodeInput(e.target.value)} type="text" /></label>
                    </div>

                    
                    <Link to={`/events/${this.state.user_id}`}> <button className="create_event_button" onClick={() =>this.onSubmit() }>Create Event</button></Link>
                    <Link to={`/events/${this.state.user_id}`}> <button className="create_event_button" onClick={() =>this.onSubmit() }>Cancel </button></Link>

                    
                </div>
             </div>
            </div>
          
        )
    }
}


