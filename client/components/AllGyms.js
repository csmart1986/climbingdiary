// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';


class AllGyms extends Component {
    
    render() {
        return (
            <div>
                <div id='nav-bar'>
                    <nav className="navbar navbar-expand-lg navbar-light " >
                        <a className="navbar-brand" href="#">
                            <img src="logo.png" width="100" height="80" className="d-inline-block align-top" 
                            alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        </div>
                    </nav>
                </div>
                <div id='gyms-list'>
                    {this.props.gyms === undefined ? 'Loading' : this.props.gyms === '' ? 'Bad search input.  Please enter a valid city.' :
                        this.props.gyms.map((gym) => (
                            <div className='gyms' key={gym.id}>
                                    <div>
                                    <img className='gym-pic' src={gym.image_url} alt={gym.name} />                            
                                    </div>
                                    <div>
                                        <h4 className="gym-info">Name: {gym.name}</h4>
                                        <h4 className="gym-info">Rating: {gym.rating}</h4>
                                        <h4 className="gym-info">Location: {gym.location.address1}, {gym.location.city}, {gym.location.state}, {gym.location.zip_code}</h4>
                                        <h4 className="gym-info">Phone: {gym.phone}</h4>
                                    </div>
                                    <div className='card' >
                                        <h4 className="gym-notes">Notes: </h4>
                                        <h8>Date: {gym.Notes ? gym.Notes.date : ''}</h8>
                                        <p>{gym.Notes ? gym.Notes.noteBody : 'No Notes'}</p>
                                    </div>
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