import styles from './Review.module.css';
import iconsSpritePath from '../../assets/icons.svg';

const Review = ({ review }) => {
    return (
        <div className={styles.review}>
            <div className={styles.userIcon}>
                {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={styles.reviewContent}>
                <p className={styles.userName}>{review.reviewer_name}</p>
                <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            className={index < review.reviewer_rating ? styles.starActive : styles.starPassive}
                        >
                            <use href={`${iconsSpritePath}#icon-star`} />
                        </svg>
                    ))}
                </div>
                <p className={styles.comment}>{review.comment}</p>
            </div>
        </div>
    );
};

export default Review;
