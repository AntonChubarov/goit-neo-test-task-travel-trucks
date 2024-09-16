import Review from './Review';
import { useTruck } from '../TruckInfo/TruckContext.jsx';
import styles from './Reviews.module.css';
import BookingForm from "../BookingForm/BookingForm.jsx";

const Reviews = () => {
    const truck = useTruck();

    if (!truck) {
        return <p>No reviews available.</p>;
    }

    return (
        <div className={styles.reviewsTabContainer}>
            <div className={styles.reviews}>
                <ul className={styles.reviewList}>
                    {truck.reviews.map((review, index) => (
                        <li key={index} className={styles.reviewItem}>
                            <Review review={review}/>
                        </li>
                    ))}
                </ul>
            </div>
            <BookingForm/>
        </div>

    );
};

export default Reviews;
