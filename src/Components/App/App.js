import React, { Component } from 'react';

import './App.css';

//Import Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../Util/Spotify';

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist Name',
      playlistTracks: []
    };
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
  savePlaylist(){
    const playlistName = this.state.playlistName;
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist Name',
        playlistTracks: []
      });
    });
  }
  search(term){
    if(term){
      Spotify.search(term).then(searchResults => {
        this.setState({ searchResults: searchResults });
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}
