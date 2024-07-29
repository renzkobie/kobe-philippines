import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Natures from './Components/Natures/Natures';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Discover More' title="Let's start your trip" />
        <Programs />
        <About />
        <Title subTitle='Gallery' title="Nature's Photos" />
        <Natures />
        <Title subTitle='Testimonials' title="What Visitor's Says" />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
