import React from 'react';

function CardDetails({ selectedCard, onClose }) {
  if (!selectedCard) {
    return null;
  }

  return (
    <div className="card-details">
      <h2>{selectedCard.title}</h2>
      <p>{selectedCard.description}</p>
      <p>Price: ${selectedCard.price}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CardDetails;