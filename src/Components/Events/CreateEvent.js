import React, { Component } from 'react';
import './events.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
            events: []   
        }

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    }

    handleInput(event) {
        this.setState({event_name: event.target.value})
        this.setState({event_description: event.target.value})
        
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
            privacy: this.state.privacy
            })
            .then((resp) => {
            console.log(resp.data);
            this.setState({events: resp.data})
            // this.props.history.push('/events')
                return resp.data
            }).catch(console.log);
        }

    render(){
        return(
            <div className="main_container">
                <header>Create Event </header> <br />
                <div onSubmit={this.onSubmit}>
                
                    <div className="name_input"><input placeholder="Event Name" onChange={this.handleInput} type="text" /></div> <br />
                    <div className="desc_input" ><textarea placeholder="Event Description" onChange={this.handleInput} type="text" /> </div> <br />
                    
                       
                    <div className="dates">
                        <div className="start_date" ><input name="startdateInput" placeholder="Start Date" type="date" onChange={(event) => this.handleInput(event)} type="text" value={this.state.startdateInput} /> </div>
                        <div className="end_date" ><input name="enddateInput" placeholder="End Date" type="date" onChange={(event) => this.handleInput(event)} type="text" value={this.state.enddateInput} /> </div>
                    </div><br />
                    <div className="ages">
                        <div className="min_age" ><input name="minageInput" placeholder="Minimum age" onChange={(event) => this.handleInput(event)} type="text" value={this.state.minageInput} /> </div>
                        <div className="max_age" ><input name="maxageInput" placeholder="Maximum age" onChange={(event) => this.handleInput(event)} type="text" value={this.state.maxageInput} /> </div>
                    </div><br />

                    <div className="address" ><input name="addressInput" placeholder="address" onChange={(event) => this.handleInput(event)} type="text" value={this.state.addressInput} /></div> <br/> 
                    
                    
                    <div className="city_zipcode">
                    <div className="city" > <input name="cityInput" placeholder="City" onChange={(event) => this.handleInput(event)} type="text" value={this.state.cityInput} /> </div>
                    <div className="zipcode" > <input name="zipcodeInput" placeholder="Zipcode" onChange={(event) => this.handleInput(event)} type="text" value={this.state.zipcodeInput} /> </div>
                    </div><br />
                   
                    <Link to="events"> <button className="create_event_btn" onClick={() =>this.onSubmit() }> Create Event </button></Link>
                    <Link to="events"> <button className="cancel_event_btn" onClick={() =>this.onSubmit() }> Cancel </button></Link>
                </div>

            </div>
          
        )
    }
}


