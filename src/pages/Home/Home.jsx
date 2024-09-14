import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleViewNowClick = () => {
        navigate('/catalog');
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog</p>
                <button onClick={handleViewNowClick}>View Now</button>
            </div>
        </div>
    );
};

export default HomePage;
