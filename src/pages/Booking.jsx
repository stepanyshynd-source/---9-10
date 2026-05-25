import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    const { trainId } = useParams();
    const navigate = useNavigate();

    const [train, setTrain] = useState(null);
    const [selectedWagon, setSelectedWagon] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/trains/${trainId}`)
            .then(res => res.json())
            .then(data => setTrain(data));
    }, [trainId]);

    const fetchBookedSeats = (tId, wagon) => {
        return fetch(`http://localhost:3001/bookings`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(
                    b => String(b.trainId) === String(tId) && Number(b.wagon) === Number(wagon)
                );
                const seats = filtered.flatMap(booking => booking.seats);
                setBookedSeats(seats);
                return seats;
            });
    };

    useEffect(() => {
        fetchBookedSeats(trainId, selectedWagon);
    }, [trainId, selectedWagon]);

    const handleSeatSelect = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleBookingSubmit = (userData) => {
        const newBooking = {
            trainId,
            wagon: selectedWagon,
            seats: selectedSeats,
            userData
        };

        fetch('http://localhost:3001/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(() => fetchBookedSeats(trainId, selectedWagon))
            .then(() => {
                setSelectedSeats([]);
                alert('Бронювання успішне!');
                navigate('/');
            });
    };

    if (!train) return <p>Завантаження...</p>;

    return (
        <div className="booking-page">
            <h2>Бронювання: Потяг {train.number}</h2>
            <p style={{ marginBottom: '20px' }}>{train.departureCity} - {train.arrivalCity}</p>

            <WagonSelector
                selectedWagon={selectedWagon}
                onSelectWagon={(w) => {
                    setSelectedWagon(w);
                    setSelectedSeats([]);
                }}
            />

            <div className="booking-content">
                <SeatMap
                    wagon={selectedWagon}
                    bookedSeats={bookedSeats}
                    selectedSeats={selectedSeats}
                    onSeatSelect={handleSeatSelect}
                />
                <BookingForm
                    onSubmit={handleBookingSubmit}
                    selectedSeats={selectedSeats}
                />
            </div>
        </div>
    );
};

export default Booking;