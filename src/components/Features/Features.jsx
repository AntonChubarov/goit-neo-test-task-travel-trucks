import React from 'react';
import FeatureIcon from './FeatureIcon';
import { useTruck } from '../TruckInfo/TruckContext.jsx';
import styles from './Features.module.css';
import BookingForm from "../BookingForm/BookingForm.jsx";

const Features = () => {
    const truck = useTruck();
    console.log(`Features opened, truck: ${JSON.stringify(truck)}`);

    if (!truck) {
        return <p>No truck data available.</p>;
    }

    const features = ['AC', 'Automatic', 'Kitchen', 'TV', 'Radio', 'Bathroom'].filter(
        (feature) => truck[feature.toLowerCase()]
    );

    return (
        <div className={styles.features}>
            <ul className={styles.featureList}>
                {features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                        <FeatureIcon feature={feature} />
                    </li>
                ))}
            </ul>
            <div className={styles.vehicleDetails}>
                <p>Form: {truck.form}</p>
                <p>Length: {truck.length}</p>
                <p>Width: {truck.width}</p>
                <p>Height: {truck.height}</p>
                <p>Tank: {truck.tank}</p>
                <p>Consumption: {truck.consumption}</p>
            </div>
            <BookingForm/>
        </div>
    );
};

export default Features;
