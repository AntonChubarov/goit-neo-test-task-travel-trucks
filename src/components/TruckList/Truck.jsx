import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import RatingInfo from '../Rating/RatingInfo.jsx';
import Location from '../Location/Location.jsx';
import FeatureIcon from '../Features/FeatureIcon.jsx';
import { Link } from 'react-router-dom';
import styles from './Truck.module.css';
import { selectFavorites } from '../../redux/selectors';
import iconsSpritePath from '../../assets/icons.svg';

const Truck = ({ truck }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites.includes(truck.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(truck.id));
        } else {
            dispatch(addFavorite(truck.id));
        }
    };

    const features = [];
    if (truck.AC) features.push('AC');
    if (truck.TV) features.push('TV');
    if (truck.kitchen) features.push('Kitchen');
    if (truck.bathroom) features.push('Bathroom');

    return (
        <div className={styles.truckContainer}>
            <img
                src={truck.gallery[0].thumb}
                alt={truck.name}
                className={styles.thumbnail}
            />
            <div className={styles.truckDetails}>
                <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
                    <svg
                        className={`${styles.favoriteIcon} ${isFavorite ? styles.favorite : ''}`}
                    >
                        <use href={`${iconsSpritePath}#icon-heart`} />
                    </svg>
                </button>
                <h2 className={styles.truckName}>{truck.name}</h2>
                <p className={styles.truckPrice}>${truck.price}</p>
                <RatingInfo rating={truck.rating} reviews={truck.reviews} />
                <Location location={truck.location} />
                <p className={styles.truckDescription}>{truck.description}</p>
                <div className={styles.featuresContainer}>
                    {features.map((feature) => (
                        <FeatureIcon key={feature} feature={feature} />
                    ))}
                </div>
                <Link to={`/catalog/${truck.id}`} className={styles.showMoreButton}>
                    Show more
                </Link>
            </div>
        </div>
    );
};

export default Truck;
