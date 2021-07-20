/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "iIOjwa3dPsb1Ydkmj5"
    }

    this.selectGif = this.selectGif.bind(this);

    // test response search function if console.log 
    this.search("hi");

  }

  search = (query) => {
    giphy('lk9zJEME17bvRX21jgAUeqRb12e9L63K').search({
      q: query,
      rating: 'g',
      limit: 10
      // arrow function instead of normal function
    }, (error, result) => {
        // Res contains gif data!
        // console.log(result)

        this.setState({
          gifs: result.data
        })
        
    });
  };
  
  selectGif(id) {
    console.log(id)
    this.setState ({
      selectedGifId: id
    });
  }

  render () {
// Array to pass gifs as a prop for the component GifList below
    const gifs = [
      {id: "iIOjwa3dPsb1Ydkmj5"},
      {id: "znLTkIJ8r0dAA"}
    ]


    return (
      <div>
        <div className="left-scene">
          {/* pass a prop named searchFunction */}
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif  id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          {/* component GifList passing a gifs prop, which holds the items from gifs array defined above */}
          {/* <GifList gifs={gifs}/>  */}
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;