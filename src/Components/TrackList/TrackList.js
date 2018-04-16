import React from 'react';

//Import CSS
import './TrackList.css';

//Import Components
import Track from '../Track/Track';

export default class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">
        { this.props.tracks.map(track => <Track key={track.id} track={track} />) }
      </div>
    );
  }
}