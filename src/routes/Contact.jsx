import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <>
    <Header/>
    <HeroSection
    cName="hero-mid"
    heroImg="https://wallpaperbat.com/img/44615-beautiful-travel-destination-landscape-wallpaper-4k.jpg"
    title="Contact"
    btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact;