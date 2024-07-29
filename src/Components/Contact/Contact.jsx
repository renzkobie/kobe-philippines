import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'd2fdbbf1-f9d7-4e15-ad39-486490b92ece');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us Message <img src={msg_icon} />{' '}
        </h3>
        <p>
          We'd love to hear from you! Whether you have questions about our
          travel services, need assistance with your bookings, or simply want to
          share your travel experiences, our team is here to help. Reach out to
          us through any of the following methods, and we'll get back to you as
          soon as possible.
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            Contact@PinayTravel.com
          </li>
          <li>
            <img src={phone_icon} />
            +63 902-292-2002
          </li>
          <li>
            <img src={location_icon} />
            123 Travel Street, Angeles City,
            <br /> Pampanga, Philippines
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            required
          />
          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter Your Mobile Number'
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name='message'
            placeholder='Enter Your Message'
            rows='6'
            required
          ></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit Now <img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
