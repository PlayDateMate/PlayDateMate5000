import React, { Component } from 'react';
import './friends.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import axios from 'axios'
import Header from '../Header/header.js'



class FriendsSearch extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      value1: 1,
      value2: 1,
      name: [],
      user_name: '',
      id: '',
      // friendName: [res.data],
    }
    this.onChange = this.onChange.bind(this)
  }


  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we get this?',response)
        this.setState({
            user_name: response.data[0].user_name,
            id: response.data[0].id
          })
      })
  }

  addFriend(val){
    console.log("Friend ID:",val)
    console.log("User ID:", (this.props.match.params.id * 1))
  }

  handleChange1 = (value1) => {
    this.setState({
      value1: value1
    })
  }
  handleChange2 = (value2) => {
    this.setState({
      value2: value2
    })
  }

                          /*===== NAME SEARCH =====*/ 
//GET REQUEST
 onChange(val){
    console.log("Value:", val)
   axios.get(`/findUser/${val}`).then(res => {
      console.log('DATA', res.data)
     this.setState({
        name: res.data
      })
      console.log(this.state.name)
    })
   
  }
  
  onClick = (val) => {
    return console.log('it worked', this.state.name)
  }
  
                        /*===== END NAME SEARCH =====*/

  render () {
    const { value1, value2 } = this.state
    const search = this.state.name.map((friend, i ) =>{
      return(
        <div>
          {friend.user_name}
          <button onClick={() => this.addFriend(friend.id)}>Add</button>
        </div>
      )
    })
    return (
      <div className='friends'>
    
      <Header SearchFriends = {this.state.id}/>
        

        <div className="search">
          <div className="search-by">Search by:</div>
          <input type="text" className= "input" placeholder="Name" onChange={(e) => this.onChange(e.target.value)}/>
          <button className="friends-button search" onClick = {() => this.onClick(this.state.name)}>Search</button>
        </div>

        
                          {/* FILTERS */}
        <div className='slider'>
          <h2>Filter by children age</h2>
          <Slider
            min={2}
            max={12}
            step={1}
            value={value1}
            onChange={this.handleChange1}
          />
          <div className='value'>{value1}</div>

          <h2>Filter by distance</h2>
          <Slider
            min={2}
            max={12}
            step={1}
            value={value2}
            onChange={this.handleChange2}
          />
          <div className='value'>{value2}</div>
        </div>
                          {/* END OF FILTER */}

          <div className="results">
            <div>Results:</div>
            { search }
          </div>

      </div>
    )
  }

}

export default FriendsSearch;