import React, { useState } from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTrains = trains.filter((train) => {
        const term = searchTerm.toLowerCase();
        return (
            train.number.toLowerCase().includes(term) ||
            train.departureCity.toLowerCase().includes(term) ||
            train.arrivalCity.toLowerCase().includes(term)
        );
    });

    return (
        <div className="train-list-container">
            <input
                type="text"
                placeholder="Пошук за містом або номером..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <div className="train-grid">
                {filteredTrains.length > 0 ? (
                    filteredTrains.map((train) => (
                        <TrainCard key={train.id} train={train} />
                    ))
                ) : (
                    <p>Потягів не знайдено.</p>
                )}
            </div>
        </div>
    );
};

export default TrainList;