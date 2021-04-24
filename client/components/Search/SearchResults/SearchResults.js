import React from 'react';
import {SearchResult} from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../components/Spinner/Spinner';

export function SearchResults(props) {
    // show spinner if loading
    let searchResults = <Spinner/>;
    // show results if not loading
    if (props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(business => <SearchResult key={business.id} business={business}/>)
    }
    
    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}