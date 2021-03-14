import React from 'react';
import {TopNav} from './TopNav/TopNav';
import {SearchBar} from '../SearchBar/SearchBar';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import useReactRouter from 'use-react-router';

export function LandingPage() {

    const {history} =useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo'/>
                <div id={styles.intro}>Find local climbing gyms! </div>
                <SearchBar search={search}/>
            </div>

            <div>
                <div id={styles.footer}>
                    <p>Created by Catherine Martin</p>
                    <p>2021</p>
                </div>
            </div>
        </div>
    );
    
}