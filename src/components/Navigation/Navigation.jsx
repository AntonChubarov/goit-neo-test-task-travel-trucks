import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to="/" className={({ isActive }) => clsx(styles.navLink, { [styles.active]: isActive })}>
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/catalog" className={({ isActive }) => clsx(styles.navLink, { [styles.active]: isActive })}>
                        Catalog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
