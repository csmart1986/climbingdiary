// create SearchBar functional component
import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
        location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getGyms = this.getGyms.bind(this);
  };
  
  // get all gyms at specific location
  getGyms = async (location) => {
    try {
      await axios.post(
        `http://localhost:3000/api/gyms`, {location: this.state.location}
      )
      // return something
    } catch (error) {
      console.log(error)
    }
  }

  handleChange(e) {
    this.setState({
      location: e.target.value,
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      location: this.state.location
    })
    const gyms = this.getGyms(this.state.location);
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

export default SearchBar;