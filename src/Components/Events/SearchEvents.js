import React, { Component } from 'react';
import './events.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import Modal from 'react-modal';



class SearchEvents extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value1: 1,
      value2: 1,
      showModal: false
      
    }
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


  render () {

    const { value1, value2, showModal } = this.state

    return (
      <div className='friends'>
    
        <header className="main-nav">
          <div>Search Events</div>
          <div></div>
        </header>
          
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
          </div>

      </div>
    )
  }

}

export default SearchEvents;