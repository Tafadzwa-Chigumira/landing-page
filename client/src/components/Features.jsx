import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Why Download Our eBook?</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Earn While Traveling</h3>
          <p>Learn how to generate income from anywhere in the world.</p>
        </div>
        <div className="feature">
          <h3>Proven Strategies</h3>
          <p>Get access to tried and tested methods to sustain your travels.</p>
        </div>
        <div className="feature">
          <h3>Expert Advice</h3>
          <p>Insights from seasoned travelers and digital nomads.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
