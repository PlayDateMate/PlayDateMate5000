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
            user_id: '',
            events: []   
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
            privacy: this.state.privacy
            })
            .then((resp) => {
            console.log(resp.data);
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
    

    render(){
        return(
            <div className="main_container">
                <header>Create Event </header> <br />
                <div onSubmit={this.onSubmit}>
                
                    <div className="name_input"><input placeholder="Event Name" onChange={(e) => this.nameInput(e.target.value)} type="text" /></div> <br />
                    <div className="desc_input" ><textarea placeholder="Event Description" onChange={(e) => this.descriptionInput(e.target.value)} type="text" /> </div> <br />
                    
                       
                    <div className="dates">
                        <div className="start_date" ><input placeholder="Start Date" type="date" onChange={(e) => this.startdateInput(e.target.value)} /> </div>
                        <div className="end_date" ><input placeholder="End Date" type="date" onChange={(e) => this.enddateInput(e.target.value)} /> </div>
                    </div><br />
                    <div className="ages">
                        <div className="min_age" ><input placeholder="Minimum age" onChange={(e) => this.minageInput(e.target.value)} type="text" /> </div>
                        <div className="max_age" ><input placeholder="Maximum age" onChange={(e) => this.maxageInput(e.target.value)} type="text" /> </div>
                    </div><br />

                    <div className="address" ><input placeholder="address" onChange={(e) => this.addressInput(e.target.value)} type="text" /></div> <br/> 
                    
                    
                    <div className="city_zipcode">
                    <div className="city" > <input placeholder="City" onChange={(e) => this.cityInput(e.target.value)} type="text" /> </div>
                    <div className="zipcode" > <input placeholder="Zipcode" onChange={(e) => this.zipcodeInput(e.target.value)} type="text" /> </div>
                    </div><br />
                   
                    <Link to={`/events/${this.state.user_id}`}> <button className="create_event_btn" onClick={() =>this.onSubmit() }> Create Event </button></Link>
                    <Link to={`/events/${this.state.user_id}`}> <button className="cancel_event_btn" onClick={() =>this.onSubmit() }> Cancel </button></Link>
                </div>

            </div>
          
        )
    }
}


