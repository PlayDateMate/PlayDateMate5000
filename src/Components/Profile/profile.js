import React, { Component } from 'react';
import './profile.css';
import {Link } from 'react-router-dom';
import axios from 'axios'
import Children from '../Children/children'
import Header from '../Header/header.js'
import ChildIcon from 'react-icons/lib/fa/child'



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
    console.log("child data",response.data)
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
        <div key={i} className = "children">
          {child.gender ==='Male' ?
            <ChildIcon color = {'#7ec0ee'} size = {60}/>:<ChildIcon color ={'#FF69B4'} size = {60}/>
          }
          <span>{child.child_name}</span>

          <span>{child.age}</span>
          <Link to={`/children/${child.id}`} >
          <button className = 'updateButton'>Update</button>
          </Link>
        </div>
      )
    })
    return (
      <div className='profileMain'>
        <Header profile ={this.state.userId}/>
        <div className="profileBody">
          <img className = "profilePicture" src={this.state.profilePicture}/>
          <div className = "profileName"><div>{this.state.name}</div></div>
        </div>
        <div className = "profileChildren">
          <div className = "profileChildrenTitle">Children</div>
        {this.state.children ?
          <div className = "displayChildren">
         {children}
        
         </div>
         
         :
         <div></div>
        }
        </div>
        <div>
          <Link to={`/addchild/${this.props.match.params.id}`}>
          <button className = "addChildButton">Add Child +</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default profile;