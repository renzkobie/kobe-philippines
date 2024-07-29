import React from 'react';
import './About.css';
import about_img from '../../assets/longhead.jpg';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} className='about-img' />
        <img src={play_icon} className='play-icon' />
      </div>
      <div className='about-left'>
        <h3>About Coron</h3>
        <h2>
          Coron is one of Palawan’s most popular beach and island destinations.{' '}
        </h2>
        <p>
          This paradise-like getaway comprises of the eastern half of Busuanga
          Island, Coron Island, and 50 other islets within the vicinity, all of
          which are separate from the main Palawan island. It has caught the
          attention of many due to its World War II wreck diving spots,
          beautiful rock formations, and unbelievably clear waters.
        </p>
        <p>
          It is also considered the more quiet and laidback sibling of El Nido,
          another famous Palawan destination because of its gorgeous waters and
          scenery. Coron certainly has a unique charm to it and worth adding to
          your travel bucket list when in the Philippines.
        </p>
        <p>
          oron has breathtaking tourist spots like Kayangan Lake, one of the
          cleanest lakes in the whole country. It’s nicknamed as The Blue Lagoon
          and surrounded by tall limestone formations, making the area look and
          feel very secluded. Either enjoy the view or take a dip, the choice is
          up to you! If you want to see underwater artifacts from the 40s,
          you’ll enjoy wreck diving in the waters of Coron.
        </p>
      </div>
    </div>
  );
};

export default About;
