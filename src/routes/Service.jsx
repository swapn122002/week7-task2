import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

const Service = () => {
  return (
    <>
    <Header/>
    <HeroSection
    cName="hero-mid"
    heroImg="https://wallpaperaccess.com/full/1510481.jpg"
    title="Service"
    btnClass="hide"
    />
    <Trip/>
    <Footer/>
    </>
  )
}

export default Service;