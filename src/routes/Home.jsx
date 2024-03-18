import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import DestinationSection from '../Components/DestinationSection';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection
    cName="hero"
    heroImg="https://wallpaperaccess.com/full/1431786.jpg"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <DestinationSection/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home;