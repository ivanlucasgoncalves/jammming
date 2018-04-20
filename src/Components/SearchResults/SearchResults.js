import React from 'react';

//Import CSS
import './SearchResults.css';

//Import Components
import TrackList from '../TrackList/TrackList';

export default class SearchResults extends React.Component {
  render(){
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={true} />
      </div>
    );
  }
}