import styles from './Home.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog</p>
                <button>View Now</button>
            </div>
        </div>
    );
};

export default HomePage;
