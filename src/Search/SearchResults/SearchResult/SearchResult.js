import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult() {
    
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Brooklyn Boulders</h2>
                <p>Rating</p>
                <p>$$ <span className="tag">Rock Climbing</span> <span class="tag">Climbing</span></p>
            </div>
            <div>
                <p>(347) 834-9066</p>
                <p>Example Street</p>
                <p>Zipcode Brooklyn</p>
            </div>
        </div>
    );
}