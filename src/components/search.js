import React, { Component } from 'react';

import '../css/bulma.css';

import feather from 'feather-icons';

class Search extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

      <div className="search-parent">
        <div className="field is-grouped search-field">
            <p className="control is-expanded">
              <input className="input is-large search-is-bold" name="query" type="text" required/>
            </p>
            <p className="control">
              <button type="submit" className="button is-success is-large bd-rainbow">
              <span className="icon">
                <i className="search-icon-2" data-feather="search"></i>
              </span>
              </button>
            </p>
        </div>
      </div>

    )
  }
}

export default Search;