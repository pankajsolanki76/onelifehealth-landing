import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Service 1</h3>
          <p>Description of service 1.</p>
        </div>
        <div className="service-item">
          <h3>Service 2</h3>
          <p>Description of service 2.</p>
        </div>
        <div className="service-item">
          <h3>Service 3</h3>
          <p>Description of service 3.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
