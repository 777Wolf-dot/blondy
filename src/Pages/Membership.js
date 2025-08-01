// src/pages/Membership.js
import React from 'react';
import '../Styles/Membership.css';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className="membership">
      <section className="membership-intro">
        <h1>Become a Member</h1>
        <p>
          Join a community of young African leaders committed to driving positive change through leadership, innovation, and unity.
        </p>
      </section>

      <section className="membership-benefits">
        <h2>Why Join Us?</h2>
        <ul>
          <li>🌍 Connect with leaders across Africa</li>
          <li>🎓 Access exclusive leadership programs and mentorship</li>
          <li>💡 Be part of innovative community projects</li>
          <li>🎤 Participate in events, summits, and forums</li>
          <li>📣 Gain exposure for your ideas and initiatives</li>
        </ul>
      </section>

      <section className="membership-plans">
        <h2>Membership Tiers</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Ordinary</h3>
            <p>Ksh 200</p>
            <ul>
              <li>Newsletter & Updates</li>
              <li>Access to public events</li>
            </ul>
            <a href="#join" className="join-btn">Join Free</a>
          </div>

          <div className="plan-card">
            <h3>Associate</h3>
            <p>Ksh 1000</p>
            <ul>
              <li>All Basic features</li>
              <li>Priority access to events</li>
              <li>Leadership workshops</li>
            </ul>
            <a href="#join" className="join-btn">Join as Pro</a>
          </div>

          <div className="plan-card">
            <h3>Honorary</h3>
            <p>Awarded</p>
            <ul>
              <li>All Pro features</li>
              <li>Official recognition</li>
              <li>Mentorship + Networking</li>
            </ul>
            <a href="#join" className="join-btn">Become Ambassador</a>
          </div>
        </div>
      </section>

      <section className="membership-cta" id="join">
        <h2>Ready to Join?</h2>
        <p>Fill out our simple form to become part of the movement.</p>
        <Link to="/signup" className="cta-btn">Get Started</Link>
         <Link to="/viewmembers" className="cta-btn">Wanna See Our Members?</Link>
      </section>
    </div>
  );
};

export default Membership;
