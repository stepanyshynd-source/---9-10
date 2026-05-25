import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { trainId } = useParams();

    return (
        <div className="booking-page">
            <h2>Бронювання квитків для потяга #{trainId}</h2>
            <p>тут буде вибір вагона та схема місць.</p>
        </div>
    );
};

export default Booking;