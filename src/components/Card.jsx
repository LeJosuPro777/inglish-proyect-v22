import React from 'react';
import '../styles/Card.css'; 

export const Card = ({ value, isFlipped, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {isFlipped ? value : "?"}
        </div>
    );
};


