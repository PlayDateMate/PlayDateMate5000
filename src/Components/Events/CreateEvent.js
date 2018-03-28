import React, { Component } from 'react';
import './events.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class CreateEvent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            descriptionInput: '',
            startdateInput: '',
            enddateInput: '',
            minageInput: '',
            maxageInput: '',
            addressInput: '',
            cityInput: '',
            zipcodeInput: '',
            privacyInput: '',

            events: {
                id: 1,
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
                user_id: 1
            }
            
        }
    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }
 
    onSubmit(event) {
        axios.post('/api/events', {
            event_name: this.state.nameInput, 
            event_description: this.state.descriptionInput, 
            start_date: this.state.startdateInput, 
            end_date: this.state.enddateInput, 
            age_min: this.state.minageInput, 
            age_max: this.state.maxageInput, 
            address: this.state.addressInput, 
            city: this.state.cityInput, 
            zipcode: this.state.zipcodeInput, 
            privacy: this.state.privacyInput
            })
            .then((response) => {
            console.log(response.data);
            this.setState({events: response.data[0]})
            this.props.history.push('/events')
                return response.data
            }).catch(console.log);
        }



    render(){
        let events = this.state.events;
        return(
            <div className="main_container">
                <header>Create Event </header> <br />
                <div className="form-container">
                
                    <div className="name_input"><input name="nameInput" placeholder="Event Name" onChange={(event) => this.handleInput(event)} type="text" value={this.state.nameInput} /></div> <br />
                    <div className="desc_input" ><textarea name="dobInput" placeholder="Event Description" onChange={(event) => this.handleInput(event)} type="text" value={this.state.descriptionInput} /> </div> <br />
                    
                       
                    <div className="dates">
                        <div className="start_date" ><input name="startdateInput" placeholder="Start Date" onChange={(event) => this.handleInput(event)} type="text" value={this.state.startdateInput} /> </div>
                        <div className="end_date" ><input name="enddateInput" placeholder="End Date" onChange={(event) => this.handleInput(event)} type="text" value={this.state.enddateInput} /> </div>
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


