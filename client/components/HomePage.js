import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Route, Switch} from 'react-router-dom';

export const HomePage = (props) => {
    
    return (
        <div id="homePage">
            <div>
                <button id='login-btn' className='btn btn-dark btn-lg'>Login</button>
                <button id='signup-btn'className='btn btn-dark btn-lg'>Signup</button>
            </div>
            <img className="main-icon" src="logo.png" />
            <h3 className='intro'>Find the local climbing gyms...</h3>
            {/* pass location and updateLocation fx to SearchBar as props */}
            <Route exact path ='/' component={SearchBar} />
            <h3 className='intro'>And keep track of your climbs!</h3>
        </div>
    )
}

