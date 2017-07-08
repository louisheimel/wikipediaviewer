import React, { Component } from 'react';

class SearchButton extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <button className="btn col s2 offset-s3" onClick={this.props.search}>Search</button>
      </div>
    );
  }
}

export default SearchButton;
