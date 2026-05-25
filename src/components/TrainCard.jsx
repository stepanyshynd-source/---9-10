import React from 'react';

const TrainCard = ({ train }) => {
    const departureDate = new Date(train.departureTime).toLocaleDateString('uk-UA');
    const departureTime = new Date(train.departureTime).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="train-card">
            <h3>Потяг {train.number}</h3>
            <p><strong>Маршрут:</strong> {train.departureCity} - {train.arrivalCity}</p>
            <p><strong>Відправлення:</strong> {departureDate} о {departureTime}</p>
            <p><strong>Час у дорозі:</strong> {train.duration}</p>
            <button className="book-button">Обрати місця</button>
        </div>
    );
};

export default TrainCard;