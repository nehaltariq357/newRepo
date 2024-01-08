import React from 'react';

function Cards({ imgsrc, price, title, des, onClick }) {
  return (
    <div className="flexcard" onClick={() => onClick({ title, description: des, price })}>
      <img src={imgsrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className='card-price'>${price}</p>
        <p className="card-text">{des}</p>
      </div>
    </div>
  );
}

export default Cards;