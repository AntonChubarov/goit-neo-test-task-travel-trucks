import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { selectVehicleById } from '../../redux/selectors';
import { appendVehicles } from '../../redux/vehiclesSlice';
import TruckInfo from '../../components/TruckInfo/TruckInfo';
import { TruckProvider } from '../../components/TruckInfo/TruckContext.jsx';
import { getCamperByID } from '../../api/campers-api';
import styles from './Details.module.css';

const DetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const dispatch = useDispatch();
    const truck = useSelector((state) => selectVehicleById(id)(state));

    useEffect(() => {
        if (!truck) {
            const fetchTruckData = async () => {
                try {
                    const data = await getCamperByID(id);
                    dispatch(appendVehicles([data]));
                } catch (error) {
                    console.error('Failed to fetch truck data:', error);
                }
            };
            fetchTruckData();
        }
    }, [id, truck, dispatch]);

    if (!truck) {
        return <p>Loading truck data...</p>;
    }

    return (
        <TruckProvider truck={truck}>
            <div className={styles.detailsContainer}>
                <TruckInfo truck={truck} />

                <div className={styles.tabs}>
                    <NavLink to="features" className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}>
                        Features
                    </NavLink>
                    <NavLink to="reviews" className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}>
                        Reviews
                    </NavLink>
                </div>

                <div className={styles.tabContent}>
                    <Outlet />
                </div>
            </div>
        </TruckProvider>
    );
};

export default DetailsPage;
