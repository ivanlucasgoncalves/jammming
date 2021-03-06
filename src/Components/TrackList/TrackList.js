import React from 'react';
import PropTypes from 'prop-types';

import './TrackList.css';

import Track from '../Track/Track';

export default class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">
        {
          this.props.tracks.map(track => <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)
        }
      </div>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.bool
};