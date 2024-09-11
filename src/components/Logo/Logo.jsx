import styles from './Logo.module.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
    return (
        <>
            <img src={logo} className={styles.logo} alt="TravelTrucks"/>
        </>
    );
};

export default Logo;
