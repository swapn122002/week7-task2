import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

const About = () => {
  return (
    <>
    <Header/>
    <HeroSection
    cName="hero-mid"
    heroImg="https://wallpaperaccess.com/full/1510481.jpg"
    title="About"
    btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default About;