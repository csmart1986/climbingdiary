import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import {SearchResults} from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location} = useReactRouter();
    // create new URLSearchParams object
    const params = new URLSearchParams(location.search);
    
    // URLSearchParams.get() returns 1st value associated to given search name parameter 
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  // initial values are pulled from query string
    
    return (
        <div>
            <NavBar term={term} location={locationParam}/>
            <SearchResultsSummary term={term} location={locationParam}/>
            <SearchResults businesses={businesses}/>
        </div>
    );
}

