import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.bookingDate) errors.bookingDate = 'Booking date is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data submitted:', formData);
            // Implement form submission logic here (e.g., send data to server)
            setFormData({ name: '', email: '', bookingDate: '', comment: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={styles.bookingForm}>
            <h2>Book your camper now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.errorInput : ''}
                        autoFocus={false}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                        autoFocus={false}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="bookingDate">Booking date:</label>
                    <input
                        type="date"
                        id="bookingDate"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        className={errors.bookingDate ? styles.errorInput : ''}
                    />
                    {errors.bookingDate && <span className={styles.errorText}>{errors.bookingDate}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="comment">Comment (optional):</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Send</button>
            </form>
        </div>
    );
};

export default BookingForm;
