import React from 'react';
import './App.css'; // il c esso esso
import dummyData from './dummyData.json';

const CardSection = () => {
  return (
    <div className="card-section">
      {dummyData.map((image) => (
        <div className="card" key={image.id}>
          <img src={image.src} alt={image.alt} />
          <h2>{image.heading}</h2>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
