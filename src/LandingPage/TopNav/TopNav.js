import React from 'react';
import styles from './TopNav.module.css'
 
export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <button className={styles.buttonNav}>Login</button>
            </div>
            <div className={styles.right}>
                <button className={styles.buttonLog}>Signup</button>
            </div>
        </div>
    );
    
}