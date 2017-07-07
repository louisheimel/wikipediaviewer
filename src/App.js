import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchButton from './components/SearchButton';
import LinkBox from './components/LinkBox';
import RandomButton from './components/RandomButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <SearchButton></SearchButton>
        <RandomButton></RandomButton>
        <LinkBox></LinkBox>
      </div>
    );
  }
}

export default App;
