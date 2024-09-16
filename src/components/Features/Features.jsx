import FeatureIcon from './FeatureIcon';
import { useTruck } from '../TruckInfo/TruckContext.jsx';
import styles from './Features.module.css';
import BookingForm from "../BookingForm/BookingForm.jsx";

const Features = () => {
    const truck = useTruck();

    if (!truck) {
        return <p>No truck data available.</p>;
    }

    const features = ['AC', 'Automatic', 'Kitchen', 'TV', 'Radio', 'Bathroom'].filter(
        (feature) => truck[feature.toLowerCase()]
    );

    return (
        <div className={styles.featuresTabContainer}>
            <div className={styles.features}>
                <ul className={styles.featureList}>
                    {features.map((feature) => (
                        <li key={feature} className={styles.featureItem}>
                            <FeatureIcon feature={feature}/>
                        </li>
                    ))}
                </ul>
                <div className={styles.vehicleDetailsContainer}>
                    <p className={styles.vehicleDetailsHeader}>Vehicle details</p>
                    <div className={styles.separatorLine}></div>
                    <div className={styles.vehicleDetails}>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Form:</span>
                            <span className={styles.detailValue}>{truck.form}</span>
                        </div>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Length:</span>
                            <span className={styles.detailValue}>{truck.length}</span>
                        </div>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Width:</span>
                            <span className={styles.detailValue}>{truck.width}</span>
                        </div>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Height:</span>
                            <span className={styles.detailValue}>{truck.height}</span>
                        </div>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Tank:</span>
                            <span className={styles.detailValue}>{truck.tank}</span>
                        </div>
                        <div className={styles.detailsRow}>
                            <span className={styles.detailLabel}>Consumption:</span>
                            <span className={styles.detailValue}>{truck.consumption}</span>
                        </div>
                    </div>
                </div>
            </div>
            <BookingForm/>
        </div>
    );
};

export default Features;
