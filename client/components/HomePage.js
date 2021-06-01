import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Route, Switch} from 'react-router-dom';

export const HomePage = (props) => {
    // useState react hook (returns array), inital value is ''
        // location => current state value, setLocation => fx to update location
    // const [location, setLocation] = useState('');
    // // handles keyword change in searchbar
    // const updateLocation = (input) => {
    //     setLocation(input)
    // };
    
    return (
        <div id="homePage">
            <img className="main-icon" src="logo.png" />
            <h3>Find the local climbing gyms...</h3>
            {/* pass location and updateLocation fx to SearchBar as props */}
            <Route exact path ='/' component={SearchBar} />
            {/* <SearchBar
                // location={location}
                // updateLocation={updateLocation}
            /> */}
            <h3>And keep track of your climbs!</h3>
        </div>
    )
}

