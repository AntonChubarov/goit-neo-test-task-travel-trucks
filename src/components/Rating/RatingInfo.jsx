import styles from './RatingInfo.module.css';
import iconsSpritePath from '../../assets/icons.svg';

const RatingInfo = ({ rating, reviews }) => {
    const numberOfReviews = reviews ? reviews.length : 0;
    return (
        <div className={styles.ratingInfo}>
            <svg className={styles.starIcon}>
                <use href={`${iconsSpritePath}#icon-star`} />
            </svg>
            <span className={styles.ratingValue}>{rating}</span>
            <span className={styles.reviewsCount}>({numberOfReviews} reviews)</span>
        </div>
    );
};

export default RatingInfo;
