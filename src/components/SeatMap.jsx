import React from 'react';

const SeatMap = ({ wagon, bookedSeats, selectedSeats, onSeatSelect }) => {
    const totalSeats = 28;
    const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

    return (
        <div className="seat-map">
            <h3>Схема місць (Вагон {wagon})</h3>
            <div className="seats-grid">
                {seats.map(seat => {
                    const isBooked = bookedSeats.includes(seat);
                    const isSelected = selectedSeats.includes(seat);

                    let seatClass = 'seat-free';
                    if (isBooked) seatClass = 'seat-booked';
                    else if (isSelected) seatClass = 'seat-selected';

                    return (
                        <button
                            key={seat}
                            disabled={isBooked}
                            className={`seat ${seatClass}`}
                            onClick={() => onSeatSelect(seat)}
                        >
                            {seat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SeatMap;