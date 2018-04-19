import React from 'react';

//Import CSS
import './PlayList.css';

//Import Components
import TrackList from '../TrackList/TrackList';

export default class PlayList extends React.Component {
  render(){
    return(
      <div className="Playlist">
        <input placeholder="New Playlist Name" />
        <TrackList tracks={this.props.playlistTracks} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}