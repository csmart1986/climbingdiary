import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import {SearchResults} from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location, history} = useReactRouter();
    // create new URLSearchParams object
    const params = new URLSearchParams(location.search);
    
    // URLSearchParams.get() returns 1st value associated to given search name parameter 
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);  // initial values are pulled from query string
    
    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`)
        // kick off a new search  (setters in custom headers can only take 1 param so pass an object)
        performSearch({term, location})
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search}/>
            <SearchResultsSummary term={searchParams.term} 
                                  location={searchParams.location} 
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}

