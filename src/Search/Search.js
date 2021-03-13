import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import {SearchResults} from './SearchResults/SearchResults';

export function Search() {
    return (
        <div>
            <NavBar/>
            <SearchResultsSummary/>
            <SearchResults/>
        </div>
    );
}

