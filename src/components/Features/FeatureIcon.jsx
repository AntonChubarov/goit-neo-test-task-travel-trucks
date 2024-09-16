import styles from './FeatureIcon.module.css';
import iconsSpritePath from '../../assets/icons.svg';

const FeatureIcon = ({ feature }) => {
    return (
        <div className={styles.featureIcon}>
            <svg className={styles.icon}>
                <use href={`${iconsSpritePath}#icon-${feature.toLowerCase()}`} />
            </svg>
            <span className={styles.featureName}>{feature}</span>
        </div>
    );
};

export default FeatureIcon;
