import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Começa como falso

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const toggleCounter = () => {
        setIsRunning(prevIsRunning => !prevIsRunning); // Alterna o estado
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={toggleCounter}>
                {isRunning ? 'Stop Counter' : 'Start Counter'}
            </button>
        </div>
    );
};

export default Counter;
