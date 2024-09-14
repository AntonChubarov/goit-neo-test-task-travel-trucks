import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Truck from './Truck';
import styles from './TruckList.module.css';
import { listCampers } from '../../api/campers-api';
import { setVehicles, appendVehicles } from '../../redux/vehiclesSlice';
import { selectVehicles } from '../../redux/selectors';

const TruckList = () => {
    const dispatch = useDispatch();
    const trucks = useSelector(selectVehicles);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [totalLoaded, setTotalLoaded] = useState(0);
    const limit = 3;

    useEffect(() => {
        const fetchInitialTrucks = async () => {
            setIsLoading(true);
            try {
                const data = await listCampers({ page: 1, limit });
                dispatch(setVehicles(data.items));
                setTotalLoaded(data.items.length);
                setPage(1);
                // Check if there are more items to load
                if (data.items.length >= data.total || data.items.length < limit) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching trucks:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitialTrucks();
    }, [dispatch]);

    const loadMoreTrucks = async () => {
        setIsLoading(true);
        const nextPage = page + 1;
        try {
            const data = await listCampers({ page: nextPage, limit });
            dispatch(appendVehicles(data.items));
            setPage(nextPage);
            const updatedTotalLoaded = totalLoaded + data.items.length;
            setTotalLoaded(updatedTotalLoaded);
            // Check if there are more items to load
            if (updatedTotalLoaded >= data.total || data.items.length < limit) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error loading more trucks:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!trucks || trucks.length === 0) {
        return <p>No trucks available</p>;
    }

    return (
        <div className={styles.truckListContainer}>
            <ul className={styles.truckList}>
                {trucks.map((truck) => (
                    <li key={truck.id} className={styles.truckListItem}>
                        <Truck truck={truck} />
                    </li>
                ))}
            </ul>
            {isLoading && <p>Loading...</p>}
            {hasMore && !isLoading && (
                <button onClick={loadMoreTrucks} className={styles.loadMoreButton}>
                    Load more
                </button>
            )}
        </div>
    );
};

export default TruckList;
