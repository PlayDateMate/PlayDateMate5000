import React, { Component } from 'react';
import './children.css';
import {Link} from 'react-router-dom'
import axios from 'axios'




class AddChildren extends Component {
  constructor(){
    super();

    this.state = {
        user_id: '',
        child_name: '',
        dob: '',
        gender: '',
        interests:''

    }
    this.childName = this.childName.bind(this);
    this.childDob = this.childDob.bind(this);    
    this.childGender = this.childGender.bind(this);    
    this.childInterests = this.childInterests.bind(this);
    this.submitNew = this.submitNew.bind(this);     

}
    componentDidMount(){
    
    console.log("who owns this baby??",this.props.match.params.id) 
    this.setState({
        user_id:this.props.match.params.id
    })   
    }

    childName(value){
        this.setState({
            child_name:value
        })
    }

    childDob(value){
        this.setState({
            dob:value
        })
    }

    childGender(value){
        this.setState({
            gender:value
        })
    }
    childInterests(value){
        this.setState({
            interests:value
        })
    }
    submitNew(){
        axios.post('/addchild', {
            user_id: this.state.user_id,
            child_name: this.state.child_name,
            dob: this.state.dob,
            gender: this.state.gender,
            interests: this.state.interests
        }).then((response)=>{
            alert('Child Added!')
        })
    }

    render() {
        return (
        <div>
            <div>
                <h1>Add a Child to your profile!</h1>
            </div>
            <div>
                Name: <input onChange={(e)=>{this.childName(e.target.value)}}></input>
            </div>
            <div>
                Date of Birth: <input type="date" onChange={(e)=>{this.childDob(e.target.value)}}></input>
            </div>
            <div>
                Gender: <select onClick={(e)=>{this.childGender(e.target.value)}}>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
            </div>
            <div>
            Interests: <input onChange={(e)=>{this.childInterests(e.target.value)}}></input>
            </div>
            
            <button onClick={this.submitNew}>Submit</button>

            <Link to={`/profile/${this.props.match.params.id}`}>
                <button>Back</button>
            </Link>
            
        </div>
    );
  }
}

export default AddChildren;