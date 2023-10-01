import React from 'react';

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card 1" />
        <h2>Card 1</h2>
        <p>Card 1 description</p>
      </div>
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card 2" />
        <h2>Card 2</h2>
        <p>Card 2 description</p>
      </div>
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card 3" />
        <h2>Card 3</h2>
        <p>Card 3 description</p>
      </div>
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card 4" />
        <h2>Card 4</h2>
        <p>Card 4 description</p>
      </div>
    </div>
  );
};

export default CardSection;
