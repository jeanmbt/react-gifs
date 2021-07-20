/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     selected: false,
  //   }
  // }


  handleClick = (event) => {
    // this.setState({
    //   selected: !selected,
    // })
    console.log(event.target);
    this.props.selectGif(this.props.id)
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      // <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
