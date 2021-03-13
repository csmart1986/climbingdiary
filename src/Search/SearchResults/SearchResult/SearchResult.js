import React from 'react';
import styles from './SearchResult.module.css';
import {BusinessRating} from '../../../BusinessRating/BusinessRating';

export function SearchResult() {
    
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Brooklyn Boulders</h2>
                <BusinessRating/>
                <p>$$ <span className="tag">Rock Climbing</span> <span class="tag">Climbing</span></p>
            </div>
            <div className={styles['contact-info']}> 
                <p>(347) 834-9066</p>
                <p>Example Street</p>
                <p>Zipcode Brooklyn</p>
            </div>
        </div>
    );
}