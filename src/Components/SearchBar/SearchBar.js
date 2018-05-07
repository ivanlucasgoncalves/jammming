import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    
    //this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  /*search(){
    let search = this.props.onSearch;
  }*/
  handleTermChange(e){
    this.props.onSearch(e.target.value);
  }
  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleTermChange: PropTypes.func
};