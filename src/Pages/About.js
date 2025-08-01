// src/pages/About.js
import React from 'react';
import '../Styles/About.css';

const teamMembers = [
  {
    name: 'Jabes Blondy',
    role: 'President',
    image: "https://i.ibb.co/jvF0HJz2/06a1293c-9fa8-4bbb-b42c-9062d9c1e22c.jpg",
  },
  {
    name: 'Blessing',
    role: 'Vice President',
    image: "https://i.ibb.co/bgTfsqpY/Whats-App-Image-2025-07-31-at-02-45-23.jpg",
  },
  {
    name: 'Tony Blair',
    role: 'Secretary General',
    image: "https://i.ibb.co/Lhbzv9pX/Whats-App-Image-2025-07-31-at-02-45-05.jpg",
  },
  {
    name: 'Briton Felix',
    role: 'Global Ambassador',
    image: "https://i.ibb.co/qYxW0VRk/Whats-App-Image-2025-07-31-at-02-45-52.jpg",
  },
  {
    name: 'Owen Gilbert',
    role: 'Executive Consultant & Policy Advisor',
    image: "https://i.ibb.co/KpxQGVpL/Whats-App-Image-2025-07-31-at-02-48-51.jpg",
  },
  {
    name: "Henry Okoth Ochieng'",
    role: 'Director of Events & Logistics',
    image: "https://i.ibb.co/jPFShrQQ/Whats-App-Image-2025-07-31-at-02-49-29.jpg",
  },
  {
    name: "Nyamwaya Owino Okowa Remmy",
    role: 'Director of Communications & Public Relations',
    image: "https://i.ibb.co/4w23C9Bq/Whats-App-Image-2025-07-31-at-02-50-08.jpg",
  },
  {
    name: "Mac Adams Otieno",
    role: "Director of Membership & Welfare",
    image:"https://i.ibb.co/1t6H8ZBx/Whats-App-Image-2025-07-31-at-02-51-27.jpg",
  },
  {
    name: "Innocent Barassa",
    role: "Director General",
    image: "https://i.ibb.co/jZkDrH34/Whats-App-Image-2025-07-31-at-02-51-57.jpg",
  },
];

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Africa's Young Leaders Association is a youth-led movement dedicated to empowering and connecting emerging leaders across the continent. We believe in the power of unity, innovation, and leadership to build a better future.
        </p>
      </section>

      {/* === VISION & MISSION SECTION === */}
      <section className="vision-mission">
        <h2>Our Motto</h2>
        <p><strong>"Young Minds, Bold Vision, United Africa"</strong></p>

        <h2>Our Vision</h2>
        <p>
          To nurture a dynamic generation of visionary, ethical, perceptive, charismatic, 
          influential, and empowered young African leaders who are committed to advancing 
          the political, economic, social, and cultural transformation of Africa through unity, 
          innovation, and strategic leadership.
        </p>
      </section>

      {/* === TEAM SECTION === */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
