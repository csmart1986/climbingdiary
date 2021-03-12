import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary'

export function Search() {
    return (
        <div>
            <NavBar/>
            <SearchResultsSummary/>
        </div>
    )
}

