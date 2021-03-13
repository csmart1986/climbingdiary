import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import {SearchResults} from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';

export function Search() {

    const {location} = useReactRouter();
    // create new URLSearchParams object
    const params = new URLSearchParams(location.search);
    
    // URLSearchParams.get() returns 1st value associated to given search name parameter
    const term = params.get('find_desc');
    const locationParams = params.get('find_loc');
    
    return (
        <div>
            <NavBar term={term} location={locationParams}/>
            <SearchResultsSummary term={term} location={locationParams}/>
            <SearchResults/>
        </div>
    );
}

