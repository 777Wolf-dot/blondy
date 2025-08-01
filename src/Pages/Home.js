// src/pages/Home.js
import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Africa's Young Leaders Association</h1>
          <p>Empowering Youth through Leadership, Innovation, and Unity.</p>
          <a href="/membership" className="cta-button">Join the Movement</a>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="value-cards">
          <div className="card">
            <h3>Leadership</h3>
            <p>We nurture young leaders to influence positive change across Africa.</p>
          </div>
          <div className="card">
            <h3>Innovation</h3>
            <p>We promote creativity and problem-solving to drive the continent forward.</p>
          </div>
          <div className="card">
            <h3>Unity</h3>
            <p>We build bridges across communities to foster solidarity and peace.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
