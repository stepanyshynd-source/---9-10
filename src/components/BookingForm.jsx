import React, { useState } from 'react';

const BookingForm = ({ onSubmit, selectedSeats }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email) {
            alert('Будь ласка, заповніть всі поля');
            return;
        }
        onSubmit(formData);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Дані пасажира</h3>
            <input type="text" name="name" placeholder="Ім'я" onChange={handleChange} required /> { }
            <input type="tel" name="phone" placeholder="Телефон" onChange={handleChange} required /> { }
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required /> { }

            <button type="submit" className="book-button" disabled={selectedSeats.length === 0}>
                Забронювати ({selectedSeats.length} місць)
            </button>
        </form>
    );
};

export default BookingForm;