import React from 'react';
import './Natures.css';
import gallery_1 from '../../assets/gal_1.jpg';
import gallery_2 from '../../assets/gal_2.jpg';
import gallery_3 from '../../assets/gal_3.jpg';
import gallery_4 from '../../assets/gal_4.jpg';
import white_arrow from '../../assets/white-arrow.png';
const Natures = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} />
        <img src={gallery_2} />
        <img src={gallery_3} />
        <img src={gallery_4} />
      </div>
      <button className='btn dark-btn'>
        See More <img src={white_arrow} />
      </button>
    </div>
  );
};

export default Natures;
