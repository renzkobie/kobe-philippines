import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          The Art of <br />
          Philippines
        </h1>
        <p>
          The Philippines consists of 7641 islands that cover it geographically.
          The interesting fact is that about 534 islands were founded and added
          just in 2017, making the total count - 7641.
        </p>
        <button className='btn btn-hero'>
          Explore More <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
