import React from 'react';
import PropTypes from 'prop-types';

import './PlayList.css';

import TrackList from '../TrackList/TrackList';

export default class PlayList extends React.Component {
  constructor(props){
    super(props);
    
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  }
  render(){
    return(
      <div className="Playlist">
        <input placeholder="New Playlist Name" onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={false} />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

PlayList.propTypes = {
  playlistTracks: PropTypes.array,
  onRemove: PropTypes.func,
  onSave: PropTypes.func,
  isRemoval: PropTypes.bool
};
