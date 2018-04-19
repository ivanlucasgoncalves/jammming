import React, { Component } from 'react';

import './App.css';

//Import Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults: [
        {id: 345, name: 'U2', artist: 'U2', album: 'Elevation'},
        {id: 346, name: 'Artic Monkeys', artist: 'Artic Monkeys', album: 'Hello!!!'}
      ],
      playlistName: 'New Playlist Name',
      playlistTracks: []
    };
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}
