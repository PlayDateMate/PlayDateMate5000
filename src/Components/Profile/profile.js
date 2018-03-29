import React, { Component } from 'react';
import './profile.css';
import {Link } from 'react-router-dom';
import axios from 'axios'
import Children from '../Children/children'



class profile extends Component {
  constructor(props){
    super(props);
    this.state={
        name: '',
        zip: '',
        email: '',
        profilePicture: '',
        canEdit: false, 
        userId:'',
        children: [{id:1, user_id: 5, age: 3, child_name: "Tino", interests: "fun things"},{id:2, user_id: 5, age: 60, child_name: "Bob", interests: "boring things"}]
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
}
async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            name: response.data[0].user_name,
            profilePicture: response.data[0].image
        })
    })
}

onEdit(){
    console.log("clicked")
    this.setState({
        canEdit: true
    })
}
onSave(){
    console.log("Saved")
    this.setState({
        canEdit:false
    })
}
  

  render() {
    
    let children = this.state.children.map((child, i)=>{
      return(
        <div>
          <span>{child.child_name}</span>

          <span>{child.age}</span>
          <Link to={`/children/${child.id}`} >
          <button>Update</button>
          </Link>
        </div>
      )
    })
    return (
      <div className='profileMain'>
        <header className='profileHeader'>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
            Profile Header
        </header>
        <div className="profileBody">
          <img src={this.state.profilePicture}/>
          <h3> Welcome, {this.state.name} </h3>
        </div>
        <div>
         {children}
        </div>
      </div>
    );
  }
}

export default profile;