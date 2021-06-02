// import axios from 'axios';
import { connect } from 'react-redux';

import React, { Component } from 'react';


class AllGyms extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">
                            <img src="logo.png" width="140" height="120" className="d-inline-block align-top" alt="logo"/>
                        </a>
                    </nav>
                </div>
                <div id='gyms-list'>
                    {this.props.gyms === undefined ? 'Loading' :
                        this.props.gyms.map((gym) => (
                            <div className='gyms' key={gym.id}>
                                <img className='gym-pic' src={gym.image_url} alt={gym.name} />
                                <h4 className="gym-info">Name: {gym.name}</h4>
                                <h4 className="gym-info">Rating: {gym.rating}</h4>
                                <h4 className="gym-info">URL: {gym.url}</h4>
                                <h4 className="gym-info">Location: {gym.location.address1}, {gym.location.city}, {gym.location.state}, {gym.location.zip_code}</h4>
                                <h4 className="gym-info">Phone: {gym.phone}</h4>
                                <h4 className="gym-info">Notes: {gym.Notes ? gym.Notes.noteBody : 'No Notes'}</h4>
                            </div>    
                    ))}
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
      gyms: state.gyms.all.data,
    }
};
  
export default connect(mapState, null)(AllGyms);