import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/tao-1.png';
import user_2 from '../../assets/tao-2.png';
import user_3 from '../../assets/tao-3.png';
import user_4 from '../../assets/tao-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials '>
      <img src={next_icon} className='next-btn' onClick={slideForward} />
      <img src={back_icon} className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} />
                <div>
                  <h3>Maria Santos</h3>
                  <span>Boracay</span>
                </div>
              </div>
              <p>
                Grabe, ang ganda ng Boracay! Yung white sand beach, parang
                pulbos sa paa. Sobrang enjoy ako sa iba't ibang water
                activities, lalo na yung parasailing. Ang dami ring masasarap na
                kainan. Sulit na sulit ang trip ko. Highly recommended for
                anyone na gusto ng ultimate beach getaway!
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} />
                <div>
                  <h3>Juan dela Cruz</h3>
                  <span>Palawan</span>
                </div>
              </div>
              <p>
                Unforgettable ang trip ko sa Palawan! Yung island hopping sa El
                Nido, parang nasa paradise talaga. Yung mga limestone cliffs at
                crystal-clear waters, sobrang breathtaking. Napaka-friendly pa
                ng mga locals, at ang fresh ng seafood. Siguradong babalik ako
                dito!"
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} />
                <div>
                  <h3>Josefa Mercado</h3>
                  <span>Baguio</span>
                </div>
              </div>
              <p>
                Ang lamig ng Baguio! Perfect getaway from the city heat. Sobrang
                saya maglakad-lakad sa Burnham Park at mag-ukay-ukay sa night
                market. Don't miss yung strawberry taho, ang sarap! Plus, ang
                daming magagandang spots for picture-taking. Highly recommended
                for a relaxing vacation.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} />
                <div>
                  <h3>Pedro Reyes</h3>
                  <span>Pampanga</span>
                </div>
              </div>
              <p>
                Ang sarap ng food trip sa Pampanga! Yung sisig at tocino, iba
                talaga ang lasa. Na-enjoy ko rin yung mga historical sites like
                the churches and old houses. Ang saya ng Giant Lantern Festival,
                sobrang festive ng atmosphere. Perfect place for both foodies
                and history buffs!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
