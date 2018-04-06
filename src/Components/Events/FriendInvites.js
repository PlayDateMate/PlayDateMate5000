import React, { Component } from 'react';
import axios from 'axios'
import Header from '../Header/header.js'

class FriendInvites extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      name: [],
      user_name: '',
      id: '',
    }
    this.onChange = this.onChange.bind(this)
    this.addFriendToEvent = this.addFriendToEvent.bind(this)
  }


  async componentDidMount(){
    console.log("test front")
    await axios.get('/getUserInfo/').then((response)=>{
        console.log('did we our friends??',response)
        this.setState({
            user_name: response.data[0].user_name,
            id: response.data[0].id
          })  
      })


       /*===== GET CURRENT FRIENDS =====*/
       axios.get('/getFriends').then((response) => {
            console.log('get friends', response)
            this.setState({
            getFriends: response.data
            })
        }).catch(console.log('BROKEN!!!'))
              /*===== END =====*/
  }

                  /*===== Add Friend Funciton =====*/
    addFriendToEvent(val){
        console.log("Friend ID:",val)
        console.log("User ID:", (this.props.match.params.id * 1))
        axios.post('/addFriendToEvent', {user_id: this.state.id, friend_id: val, event_id: this.props.match.params.id }).then(response=>{
        console.log(response.data)
    })




    // axios.get(`/eventId/${this.props.match.params.id}`).then((response) =>{
    //   console.log('ID', this.props.match.params.id)
    //   console.log('YAY', response.data)
    // })
  }
                          /*===== End =====*/

 
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
                    /*===== INVITE FFRIENDS =====*/
    const search = this.state.name.map((friend, i ) =>{
      return(
        <div>
          {friend.user_name}
          <button onClick={() => this.addFriendToEvent(friend.id)}>Invite</button>
        </div>
      )
    })
                        /*===== END =====*/ 
    return (
      <div className='friends'>
    
      <Header SearchFriends = {this.state.id}/>
        

        <div className="search">
          <div className="search-by">Search by:</div>
          <input type="text" className= "input" placeholder="Name" onChange={(e) => this.onChange(e.target.value)}/>
          
        </div>

          <div className="results">
            <div>Results:</div>
            { search }
          </div>



      </div>
    )
  }
}

export default FriendInvites;

