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
    // this.getGyms = this.getGyms.bind(this);
  };
  
  // get all gyms/notes at specific location
  // getGyms = async (location) => {
  //   try {
  //     const allGyms = await axios.post(
  //       `http://localhost:3000/api/gyms`, {location: this.state.location}
  //     )
  //     console.log('ALL GYMS: ',allGyms)
  //     return allGyms
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  handleChange(e) {
    this.setState({
      location: e.target.value,
    })
  };

  async handleSubmit(e) {
    e.preventDefault();
    // this.setState({
    //   location: this.state.location
    // })
    // const gyms = await this.getGyms(this.state.location);
    console.log('location: ', this.state.location)
    await this.props.fetchGyms(this.state.location);
    // this.setState({
    //   location:'' 
    // })
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
          {/* <Link to='/allgyms'> */}
            <button type='submit'>Search</button>
          {/* </Link> */}
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