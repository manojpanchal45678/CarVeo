import React from 'react'
import { useState } from 'react';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import Service from './Components/Services/Service';
import Reviews from './Components/Reviews/Reviews';
import Info from './Components/Info/Info';
import StepGuide from './Components/StepGuide/StepGuide';
import Footer from './Components/Footer/Footer';
import CarCard from './Components/CarCard/CardCard';
import { sliderData } from './constants/Data';

const App = () => {
  const [darkMode,setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={`${darkMode && "dark"} font-josfin`}>
   <Header handleDarkMode={handleDarkMode} darkMode={darkMode}/>
  <Hero darkMode={darkMode}/>
  <Service />
  <CarCard />
  <Reviews />
  <Info />
  <StepGuide />
  <Footer />
  </div>
  )
}

export default App;