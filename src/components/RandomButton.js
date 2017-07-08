import React, { Component } from 'react';

class RandomButton extends Component {
  openRandomArticle() {
     window.open("https://en.wikipedia.org/wiki/Special:Random")
  }

  render() {
    return (
      <div>
        <button className="btn col s2 offset-s2" onClick={this.openRandomArticle}>Random</button>
      </div>
    );
  }
}

export default RandomButton;
