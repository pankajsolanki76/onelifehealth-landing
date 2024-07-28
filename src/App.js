import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import './App.css'; // Ensure this path is correct based on your project structure

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default App;
