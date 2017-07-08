import React, { Component } from 'react';

class LinkBox extends Component {
  renderLink(l) {
    const titleStyles = {
      'textDecoration': 'none',
      'color': 'black',
      'fontSize': '25px'
    }

    const descriptionStyles = {
      'color': 'black'
    }

    return <a href={l.url}>
        <p style={titleStyles}>{l.title}</p>
        <p style={descriptionStyles}>{l.description}</p>
      </a>;
  }

  handleHover = (e) => {
    e.target.classList = 'teal lighten-2'
  }
  render() {
    const styles = {
      'margin': '2px 0',
    }
    return (
      <div className="section">
        <ul>
          {this.props.links.map(link => <li style={styles} className='hoverable card-panel' key={link.title}>{this.renderLink(link)}</li>)}
        </ul>
      </div>
    );
  }
}

export default LinkBox;
