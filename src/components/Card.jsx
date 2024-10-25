import React from 'react';
import '../styles/components/Card.css'; // Add your own styles

const Card = ({ value, isFlipped, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {isFlipped ? value : "?"}
        </div>
    );
};

export default Card;
