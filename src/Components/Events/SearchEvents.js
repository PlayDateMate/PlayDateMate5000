import React, { Component } from 'react';
import './SearchEvents.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import Modal from 'react-modal';
import Header from '../Header/header.js';
import axios from 'axios';



class SearchEvents extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value1: 1,
      value2: 1,
      showModal: false,
      name: [],
      user_name: '',
      id: ''
      
    }
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

toggleModal = () => {
  this.setState({
    showModal: !this.state.showModal
  });
}

//----------Search events by user name-------------
onChange(val){
  console.log("Value:", val)
 axios.get(`/findUser/${val}`).then(res => {
    console.log('DATA', res.data)
   this.setState({
      name: res.data.user_name
    })
    console.log(this.state.name)
  })
 
}

onClick = (val) => {
  return console.log('it worked', this.state.name)
}
//----------------end-----------------------------


  render () {

    const { value1, value2, showModal } = this.state

    return (
      <div className='events'>
    
      <Header searchEventsId ={this.props.match.params.id} searchEvents ={'props'}/>
          
        <h4>Search by:</h4>
        <div className="search">
          <div>
            <button className="search_by_zipcode" onClick={this.toggleModal} > Zip Code </button>
              <Modal show={this.state.showModal}
                onClose={this.toggleModal}>
                <input className="modal_input">Search by Zipcode or Name</input>
              </Modal>
          </div>

          <button className="search_by_name">Name</button>
        </div>

        
                          {/* FILTERS */}
        <div className='slider'>
          <h4>Filter by age</h4>
          <Slider
            min={2}
            max={12}
            step={1}
            value={value1}
            onChange={this.handleChange1}
          />
          <div className='value'>{value1}</div>

          <h4>Filter by distance</h4>
          <Slider
            min={2}
            max={12}
            step={1}
            value={value2}
            onChange={this.handleChange2}
          />
          <div className='value'>{value2}</div>
        </div> <br />
                          {/* END OF FILTER */}

          <div className="results">
            <div>Search Results</div>
            {this.state.name}
          </div>

      </div>
    )
  }

}

export default SearchEvents;