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
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track);
    this.setState({ playlistTracks: this.state.playlistTracks });
  }
  removeTrack(track){
    const removeSong = this.state.playlistTracks.filter(remsong => remsong.id !== track.id);
    this.setState({ playlistTracks: removeSong });
  }
  updatePlaylistName(newPlaylistName){
    this.setState({ playlistName: newPlaylistName });
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}
