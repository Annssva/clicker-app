import React, { useState } from 'react';
import './style/App.css';

function App() {
    const [count, setCount] = useState(0);
    const [dots, setDots] = useState([]);

    const handleButtonClick = () => {
        setCount(count + 1);
        createDot();
    };

    const createDot = () => {
        const newDot = {
            id: count,
            left: Math.random() * window.innerWidth - 10,
            top: Math.random() * window.innerHeight - 10,
        };
        setDots((prevDots) => [...prevDots, newDot]);
    };

    return (
        <>
            <div className="main-div">
                <h1 className="title">Кликер</h1>
                <div className="count-div">
                    <p className="count">{count !== 0 && count}</p>
                </div>
                <button onClick={handleButtonClick} className="btn">
                    Кликни
                </button>
            </div>
            {dots.map((dot) => (
                <div key={dot.id} className="dot" style={{ left: `${dot.left}px`, top: `${dot.top}px` }} />
            ))}
        </>

    );
}

export default App;
