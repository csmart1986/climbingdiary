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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            name='enter city'
            onChange={this.handleChange}
            value={this.state.location}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    ) 
  }
}


const mapDispatch = dispatch => {
  return {
    fetchGyms: (location) => {
      console.log('mapdispatch:',location)
      dispatch(getGyms(location))
    }
  };
}

export default connect(null, mapDispatch)(SearchBar);