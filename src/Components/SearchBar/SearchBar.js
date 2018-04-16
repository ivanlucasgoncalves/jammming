import React from 'react';

//Import class
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}