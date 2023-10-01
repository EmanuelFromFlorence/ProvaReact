import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="https://cdn.pixabay.com/photo/2023/05/15/01/44/flower-7993995_1280.jpg" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2023/05/15/01/44/flower-7993995_1280.jpg" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2023/05/15/01/44/flower-7993995_1280.jpg" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
