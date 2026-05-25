import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
    const [trains, setTrains] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/trains')
            .then((res) => res.json())
            .then((data) => {
                setTrains(data);
                setLoading(false);
            })
            .catch((err) => console.error("Помилка завантаження даних:", err));
    }, []);

    if (loading) return <p>Завантаження розкладу...</p>;

    return (
        <div className="home-page">
            <h1>Розклад потягів</h1>
            <TrainList trains={trains} />
        </div>
    );
};

export default Home;