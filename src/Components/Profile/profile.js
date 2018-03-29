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
        userId: '',
        children: []
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getChildren = this.getChildren.bind(this);
}
async componentWillMount(){
    await axios.get('/getUserInfo/').then((response)=>{
      console.log("herro",response)
        this.setState({
            name: response.data[0].user_name,
            profilePicture: response.data[0].image,
            userId: response.data[0].id
        })
    }, this.getChildren())
}

getChildren(){
  console.log('is this firing?', this.props.match.params.id )
  axios.get(`/getchildren/${this.props.match.params.id}`).then(response=>{
    console.log('did this work?...', response.data)
    this.setState({
      children: response.data
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
        <div key={i}>
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
        <div>{this.state.children ?
          <div>
         {children}
         </div>
         :
         <div></div>
        }
        </div>
      </div>
    );
  }
}

export default profile;