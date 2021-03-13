import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult() {
    
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/150' alt='business'/>
            <p>General Information</p>
            <p>Address Information</p>
        </div>
    );
}