import React, { Component } from 'react';
import './children.css';




class Children extends Component {
  constructor(){
    super();

    this.state = {

    }
 console.log("Have you seen my children?",this.props.match.params)
  }
  

  render() {
    return (
      <div className="Children">
        Children{this.props.id}
      </div>
    );
  }
}

export default Children;