import styles from './Location.module.css';
import iconsSpritePath from '../../assets/icons.svg';

const Location = ({ location }) => {
    return (
        <div className={styles.location}>
            <svg className={styles.locationIcon}>
                <use href={`${iconsSpritePath}#icon-map`} />
            </svg>
            <span className={styles.locationText}>{location}</span>
        </div>
    );
};

export default Location;
