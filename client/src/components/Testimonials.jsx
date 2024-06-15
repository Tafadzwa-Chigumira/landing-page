import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Readers Say</h2>
        <div className="testimonials-list">
            <div className="testimonial">
                <p>"This eBook changed my life! Now I travel full-time and earn more than I did at my 9-5 job."</p>
                <h4>- Mabel</h4>
            </div>
            <div className="testimonial">
                <p>"A must-read for anyone who wants to explore the world without worrying about money."</p>
                <h4>- Charlotte</h4>
            </div>
            <div className="testimonial">
                <p>"A must-read for anyone who wants to explore the world without worrying about money."</p>
                <h4>- James</h4>
            </div>
        </div>
    </section>
  );
}

export default Testimonials;
