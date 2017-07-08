import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchButton from './components/SearchButton';
import LinkBox from './components/LinkBox';
import RandomButton from './components/RandomButton';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: '',
      results: []
    }
  }

  makeQueryString = () => {
    // modified from Lupe Camacho's article: http://lupecamacho.com/wikipedia-viewer-wikipedia-api-cross-origin-request-issues/
    return 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + this.state.searchVal + '&format=json&origin=*'
  }
  search = () => {
    const queryString = this.makeQueryString()
    fetch(queryString)
    .then(data => data.json())
    .then(data => {
      const resultsLength = data[1].length
      const dataObjects = []
      for (let i = 0; i < resultsLength; i++) {
        dataObjects.push({
          title: data[1][i],
          description: data[2][i],
          url: data[3][i],
        })
      }
      this.setState({
        results: dataObjects
      })
    })
  }

  handleInput(val) {
    this.setState({
      searchVal: val
    })
  }

  render() {
    const searchStyles = {
      classList: 'input-field'
    }
    const searchButtonStyles = {
      classList: 'waves-effect btn'
    }

    const randomButtonStyles = {
      classList: 'waves-effect btn'
    }

    return (
      <div className="App container">
        <Search style={searchStyles} handleInput={this.handleInput.bind(this)}></Search>

        <div className="row">
          <SearchButton search={this.search.bind(this)}></SearchButton>
          <RandomButton></RandomButton>
        </div>
        <LinkBox links={this.state.results}></LinkBox>
      </div>
    );
  }
}

export default App;
