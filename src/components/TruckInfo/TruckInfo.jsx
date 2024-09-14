import React from 'react';
import RatingInfo from '../Rating/RatingInfo';
import Location from '../Location/Location';
import styles from './TruckInfo.module.css';

const TruckInfo = ({ truck }) => {
    if (!truck) {
        return <p>Truck not found.</p>;
    }

    return (
        <div className={styles.truckInfo}>
            <h2 className={styles.name}>{truck.name}</h2>
            <RatingInfo rating={truck.rating} reviews={truck.reviews} />
            <Location location={truck.location} />
            <p className={styles.price}>${truck.price}</p>
            <p className={styles.description}>{truck.description}</p>

            <div className={styles.gallery}>
                {truck.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`${truck.name} thumbnail`} className={styles.thumbnail} />
                ))}
            </div>
        </div>
    );
};

export default TruckInfo;
