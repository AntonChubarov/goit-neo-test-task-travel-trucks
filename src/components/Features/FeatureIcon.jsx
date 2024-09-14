import React from 'react';
import styles from './FeatureIcon.module.css';

const FeatureIcon = ({ feature }) => {
    return (
        <div className={styles.featureIcon}>
            <svg className={styles.icon}>
                <use href={`#${feature.toLowerCase()}-icon`} />
            </svg>
            <span className={styles.featureName}>{feature}</span>
        </div>
    );
};

export default FeatureIcon;
