import React from 'react';

const WagonSelector = ({ selectedWagon, onSelectWagon }) => {
    const wagons = [1, 2, 3, 4, 5];

    return (
        <div className="wagon-selector">
            <h3>Оберіть вагон:</h3>
            <div className="wagon-buttons">
                {wagons.map(wagon => (
                    <button
                        key={wagon}
                        className={`wagon-btn ${selectedWagon === wagon ? 'active' : ''}`}
                        onClick={() => onSelectWagon(wagon)}
                    >
                        Вагон {wagon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WagonSelector;