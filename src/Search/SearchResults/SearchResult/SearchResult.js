import React from 'react';
import styles from './SearchResult.module.css';
import {BusinessRating} from '../../../BusinessRating/BusinessRating';

export function SearchResult(props) {
    const business = props.business;
    
    if (!business) {
        return <div></div>
    }

    const addressLines = business.location.display_address.map(addressLine => <p key={business.id + addressLine}>{addressLine}</p>);

    return (
        <div className={styles['search-result']}>
            <img src={business.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">{business.name}</h2>
                <BusinessRating reviewCount={business.reviewCount} rating={business.rating}/>
                <p><span className="tag">Rock Climbing</span> <span className="tag">Climbing</span></p>
            </div>
            <div className={styles['contact-info']}> 
                <p>{business.phone}</p>
                {addressLines}
            </div>
        </div>
    );
}