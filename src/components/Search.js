import React, { Component } from 'react';

class Search extends Component {
  handleInput = (e) =>  {
    this.props.handleInput(e.target.value)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput}/>
      </div>
    ); 
  }
}

export default Search;
