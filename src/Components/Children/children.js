import React, { Component } from 'react';
import './children.css';
import Header from '../Header/header.js'
import axios from 'axios';




class Children extends Component {
  constructor(){
    super();
 
    this.state = {
      parentId: '',
      childName: '',
      childAge: '',
      childGender: '',
      childInterests:'',
      edit: false,
      dob: '',
      childId: ''

    }
    
    this.editable = this.editable.bind(this);
    this.reset = this.reset.bind(this);
    this.updateChild = this.updateChild.bind(this)

  }
  componentDidMount(){
    axios.get('/getuser').then(response =>{
      console.log('is this coming back?', response)
      this.setState({
        parentId: response.data[0].id
      })
    })
    axios.get(`/getonechild/${this.props.match.params.id}`).then(response=>{
      console.log('we getting kids back?', response)
      this.setState({
        childName: response.data[0].child_name, 
        childInterests: response.data[0].interests,
        childGender: response.data[0].gender,
        dob: response.data[0].dob,
        childId: response.data[0].id
      })
    })
    axios.get(`/getchildage/${this.props.match.params.id}`).then(response=>{
      console.log('what is this age?', response)
      this.setState({
        childAge: response.data[0].age.years
      })
    })
    
    
  }
  editable(){
    console.log('you can update this child')
    this.setState({
      edit: true
    })
  }

  save(){
    this.setState({
      edit: false
    })
  }
  childName(value){
    this.setState({
        childName:value
    })
}

childDob(value){
    this.setState({
        dob:value
    })
}

childGender(value){
    this.setState({
        childGender:value
    })
}
childInterests(value){
    this.setState({
        childInterests:value
    })
}
updateChild(){
    axios.put(`/updatechild/${this.state.childId}`, {
        child_id: this.state.childId,
        child_name: this.state.childName,
        dob: this.state.dob,
        gender: this.state.childGender,
        interests: this.state.childInterests,
        
    }).then((response)=>{
        alert('Child Updated!')
        this.setState({
          edit: false
        })
    })
}
reset(){
  axios.get(`/getonechild/${this.state.childId}`).then(response=>{
    console.log('we getting kids back?', response)
    this.setState({
      childName: response.data[0].child_name, 
      childInterests: response.data[0].interests,
      childGender: response.data[0].gender,
      dob: response.data[0].dob,
      edit: false
    })
  })
}
  

  render() {
    return (
      
      <div>
        
        <div className="Children">
          <Header child={this.state.parentId}/>
        </div>
        <div>
          { !this.state.edit ?
          <div>
            <div>
            {this.state.childName}
            </div>

            <div>
            {this.state.childGender}
            </div>

            <div>
            {this.state.childInterests}
            </div>

            <div>
            {this.state.childAge}
            </div>
            <div>
              <button onClick={()=>this.editable()}>Update</button>
            </div>
          </div>
          
          :
          <div>
          <div>
                <h1>Update</h1>
            </div>
            <div>
                Name: <input value={this.state.childName} onChange={(e)=>{this.childName(e.target.value)}}></input>
            </div>
            <div>
                Date of Birth: <input type="date" onChange={(e)=>{this.childDob(e.target.value)}}></input>
            </div>
            <div>
                Gender: <select onChange={(e)=>{this.childGender(e.target.value)}}>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
            </div>
            <div>
            Interests: <input value={this.state.childInterests} onChange={(e)=>{this.childInterests(e.target.value)}}></input>
            </div>
            
            <button onClick={this.updateChild}>Submit</button>
            <button onClick={this.reset}>Cancel</button>

           
            </div>
          }
          
          </div>
      </div>
    );
  }
}

export default Children;