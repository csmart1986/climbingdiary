import React from 'react';
import {SearchResult} from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';

export function SearchResults(props) {
    if (!props.businesses || !props.businesses.length) {
        return (<div></div>);
    }

    const searchResults = props.businesses.map(business => <SearchResult key={business.id} businesses={business}/>)
    
    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}