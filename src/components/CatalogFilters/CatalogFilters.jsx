import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { setVehicles } from '../../redux/vehiclesSlice';
import { listCampers } from '../../api/campers-api';

import styles from './CatalogFilters.module.css';
import iconsSpritePath from '../../assets/icons.svg';

const CatalogFilters = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [vehicleType, setVehicleType] = useState('');

    const equipmentOptions = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];
    const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

    const iconMapping = {
        AC: 'icon-ac',
        Automatic: 'icon-diagram',
        Kitchen: 'icon-kitchen',
        TV: 'icon-tv',
        Bathroom: 'icon-bathroom',
        Van: 'icon-van',
        'Fully Integrated': 'icon-integrated',
        Alcove: 'icon-alcove',
    };

    const vehicleTypeMapping = {
        Van: 'van',
        'Fully Integrated': 'fullyIntegrated',
        Alcove: 'alcove',
    };

    const handleEquipmentChange = (option) => {
        setSelectedEquipment((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleVehicleTypeChange = (type) => {
        setVehicleType((prevType) => (prevType === type ? '' : type));
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        dispatch(setFilter({ key: 'location', value: location }));
        dispatch(setFilter({ key: 'equipment', value: selectedEquipment }));
        dispatch(setFilter({ key: 'type', value: vehicleType }));

        const params = {
            ...(location && { location }),
            ...(vehicleType && { form: vehicleTypeMapping[vehicleType] }),
            ...(selectedEquipment.includes('AC') && { AC: true }),
            ...(selectedEquipment.includes('TV') && { TV: true }),
            ...(selectedEquipment.includes('Kitchen') && { kitchen: true }),
            ...(selectedEquipment.includes('Bathroom') && { bathroom: true }),
            ...(selectedEquipment.includes('Automatic') && {
                autoTransmission: true,
            }),
        };

        try {
            const data = await listCampers(params);
            dispatch(setVehicles(data.items));
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSearch}>
            <div className={styles.locationInputContainer}>
                <svg className={styles.locationIcon}>
                    <use href={`${iconsSpritePath}#icon-map`} />
                </svg>
                <input
                    type="text"
                    className={styles.locationInput}
                    placeholder="Ukraine, Kyiv"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <p className={styles.filtersTitle}>Filters</p>

            <p>Vehicle equipment</p>

            <div className={styles.equipmentContainer}>
                {equipmentOptions.map((option) => (
                    <div key={option} className={styles.option}>
                        <input
                            type="checkbox"
                            id={`equipment-${option}`}
                            name="equipment"
                            value={option}
                            checked={selectedEquipment.includes(option)}
                            onChange={() => handleEquipmentChange(option)}
                            className={styles.checkboxInput}
                        />
                        <label htmlFor={`equipment-${option}`} className={styles.label}>
                            <svg className={styles.icon}>
                                <use href={`${iconsSpritePath}#${iconMapping[option]}`} />
                            </svg>
                            <span>{option}</span>
                        </label>
                    </div>
                ))}
            </div>

            <p>Vehicle type</p>

            <div className={styles.vehicleTypeContainer}>
                {vehicleTypes.map((type) => (
                    <div key={type} className={styles.option}>
                        <input
                            type="radio"
                            id={`vehicleType-${type}`}
                            name="vehicleType"
                            value={type}
                            checked={vehicleType === type}
                            onChange={() => handleVehicleTypeChange(type)}
                            className={styles.radioInput}
                        />
                        <label htmlFor={`vehicleType-${type}`} className={styles.label}>
                            <svg className={styles.icon}>
                                <use href={`${iconsSpritePath}#${iconMapping[type]}`} />
                            </svg>
                            <span>{type}</span>
                        </label>
                    </div>
                ))}
            </div>

            <button type="submit" className={styles.searchButton}>
                Search
            </button>
        </form>
    );
};

export default CatalogFilters;
