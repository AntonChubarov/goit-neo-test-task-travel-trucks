import React from 'react';
import styles from './Location.module.css';

const Location = ({ location }) => {
    return (
        <div className={styles.location}>
            <svg className={styles.locationIcon}>
                <use href="#location-icon" />
            </svg>
            <span className={styles.locationText}>{location}</span>
        </div>
    );
};

export default Location;
