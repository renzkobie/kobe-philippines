import React from 'react';
import './Programs.css';
import program_1 from '../../assets/elnido.jpg';
import program_2 from '../../assets/boracay.jpg';
import program_3 from '../../assets/baguio.jpg';
import program_icon_1 from '../../assets/crab.png';
import program_icon_2 from '../../assets/turtle.png';
import program_icon_3 from '../../assets/temperature.png';

const Programs = () => {
  return (
    <div className='programs' id=''>
      <div className='program'>
        <img src={program_1} />
        <div className='caption'>
          <img src={program_icon_1} />
          <p>El Nido</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} />
        <div className='caption'>
          <img src={program_icon_2} />
          <p>Boracay</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} />
        <div className='caption'>
          <img src={program_icon_3} />
          <p>Baguio</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
