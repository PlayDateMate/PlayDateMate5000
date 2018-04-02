import React, { Component } from 'react';
// import './profile.css';
import {Link } from 'react-router-dom';
import axios from 'axios'
import Children from '../Children/children'
import Header from '../Header/header.js'
import ChildIcon from 'react-icons/lib/fa/child'



class ViewProfile extends Component {
  constructor(props){
    super(props);
    this.state={
        name: '',
        zip: '',
        email: '',
        profilePicture: '',
        canEdit: false, 
        userId: '',
        children: [],
        original_id: ''
    }
    
    this.getChildren = this.getChildren.bind(this);
}
async componentWillMount(){
    console.log('did paige get us the right id without breaking things?', this.props.id)
    await axios.get(`/viewprofile/${this.props.match.params.id}`).then((response)=>{
      console.log("herro",response, this.props.id)
        this.setState({
            name: response.data[0].user_name,
            profilePicture: response.data[0].image,
            userId: response.data[0].id
        })
    }, this.getChildren())
    axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            original_id: response.data[0].id
        })
    })
}

getChildren(){
    console.log('is this firing?', this.props.match.params.id )
    axios.get(`/getchildren/${this.props.match.params.id}`).then(response=>{
    
    this.setState({
        children: response.data
    })
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

            <span>{child.age.years ? `${child.age.years} years old` : `${child.age.months} months old`}</span>
           
        </div>
        )
    })
    return (
        <div className='profileMain'>
            <Header viewProfile ={this.state.name}
                    id={this.state.original_id}
            />
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
        </div>
    );
  }
}

export default ViewProfile;