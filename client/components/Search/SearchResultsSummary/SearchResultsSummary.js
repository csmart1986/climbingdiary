import React from 'react';
import styles from './SearchResultsSummary.module.css'

export function SearchResultsSummary(props) {
    let resultsStats = null;
    if (props.amountResults && props.shownResults) {
        resultsStats = <p>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{props.term}</strong> {props.location}</h1>
                {resultsStats}
                <div>
                    <form>
                        <label className={styles.filter}>Filter By: 
                            <select  className={styles.select} >
                                <option value='all'>All gyms</option>
                                <option value='Been there'>Been there, climbed that!</option>
                                <option value='Still need to visit'>Still need to visit!</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}