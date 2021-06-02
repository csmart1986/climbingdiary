// create SearchBar functional component
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import thunk
import { getGyms } from '../store/gyms';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      location: e.target.value,
    })
  };

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.fetchGyms(this.state.location);
    this.props.history.push('/allgyms');
  };

  render() {
    return (
      <div id='search-bar'>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="inputCity" id='near'>Near:</label> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="near">Near</span>
            </div>
            <input type='text'
              className='searchbar'
              placeholder='enter city'
              onChange={this.handleChange}
              value={this.state.location}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type='submit'>Search</button>
            </div>
          </div>
        </form>
      </div>
    ) 
  }
}


const mapDispatch = dispatch => {
  return {
    fetchGyms: (location) => {
      dispatch(getGyms(location))
    }
  };
}

export default connect(null, mapDispatch)(SearchBar);