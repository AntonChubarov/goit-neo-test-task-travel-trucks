import React from 'react';
import styles from './Review.module.css';

const Review = ({ review }) => {
    return (
        <div className={styles.review}>
            <div className={styles.userIcon}>
                {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={styles.reviewContent}>
                <h4 className={styles.userName}>{review.reviewer_name}</h4>
                <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            className={styles.star}
                            fill={index < review.reviewer_rating ? 'yellow' : 'gray'}
                        >
                            <use href="#star-icon" />
                        </svg>
                    ))}
                </div>
                <p className={styles.comment}>{review.comment}</p>
            </div>
        </div>
    );
};

export default Review;
