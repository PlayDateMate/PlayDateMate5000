import React, { Component } from 'react';
import './children.css';




class Children extends Component {
  constructor(){
    super();

    this.state = {

    }
    

  }
  componentDidMount(){
    
console.log(this.props.match.params.id)    
  }
  

  render() {
    return (
      <div className="Children">
        Children
      </div>
    );
  }
}

export default Children;