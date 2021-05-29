import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar= (props) => {
    // useState react hook (returns array), inital value is ''
        // location => current state value, setLocation => fx to update location
    const [location, setLocation] = useState('');
    // handles keyword change in searchbar
    const updateLocation = (input) => {
        setLocation(input)
    };
    
    return (
        <Navbar id="NavBar">
            <img className="main-icon" src="logo.png" />
            <SearchBar
                location={location}
                updateLocation={updateLocation}
            />
        </Navbar>
    )
}