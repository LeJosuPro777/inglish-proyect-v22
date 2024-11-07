import React from 'react';
import '../styles/Card.css'; 

const Card = ({ value, isFlipped, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {isFlipped ? value : "?"}
        </div>
    );
};

export default Card;
