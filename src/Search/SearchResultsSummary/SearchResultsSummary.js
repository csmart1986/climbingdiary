import React from 'react';
import styles from './SearchResultsSummary.module.css'

export function SearchResultsSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>climbing gyms</strong> new york city</h1>
                <p>Showing 1-10 out of 10 results</p>
            </div>
        </div>
    )
}