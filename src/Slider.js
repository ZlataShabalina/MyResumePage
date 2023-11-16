import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imageUrls = [
    '/images/dog.jpg',
    '/images/dance.jpg',
    '/images/golf.jpg',
    '/images/wind.jpg',
  ];

  const facts = [
    'I have a dog.',
    'I have been dancing since the age of 4.',
    'I play golf like a professional.',
    'In summer I do windsurfing.',
  ];

  return (
    <div className='whole'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageUrls.map((imageUrl, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + imageUrl}
              alt={`Slide ${i + 1}`}
            />
            <Carousel.Caption>
              <h3>{facts[i]}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
