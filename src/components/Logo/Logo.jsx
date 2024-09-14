import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
    return (
        <Link to="/" className={styles.logoLink}>
            <img src={logo} className={styles.logo} alt="TravelTrucks" />
        </Link>
    );
};

export default Logo;
