import React, { Component } from 'react';
import './friends.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'



class FriendsSearch extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value1: 1,
      value2: 1
      
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
  render () {
    const { value1, value2 } = this.state
    return (
      <div className='friends'>
    
        <header className="main-nav">
          <div>Find Friends</div>
          <div></div>
        </header>
          

        <div className="search">
          <div>Search by:</div>
          <button className="friends-button">Zip Code</button>
          <button className="friends-button search-buttons">Name</button>
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
            <div>Results</div>
          </div>

      </div>
    )
  }

}

export default FriendsSearch;