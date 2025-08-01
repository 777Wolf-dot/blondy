// src/pages/Contact.js
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaPhone,
  FaSms,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out through any of the channels below.</p>

      <div className="contact-methods">
        <a href="tel:+254 702 858 465" className="contact-icon phone">
          <FaPhone />
          <span>Call Us</span>
        </a>

        <a href="sms:+254 702 858 465" className="contact-icon sms">
          <FaSms />
          <span>Send SMS</span>
        </a>

        <a href="aylaaafrica.org@gmail.com" className="contact-icon email">
          <FaEnvelope />
          <span>General Inquiries</span>
        </a>
        <a href="aylaafrica.directorate@gmail.com" className="contact-icon email">
          <FaEnvelope />
          <span>Directorate and Executive Affairs </span>
        </a>

        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon facebook"
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>

        <a
          href="https://www.instagram.com/ayla001_africa?igsh=YzljYTk1ODg3Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a
          href="https://x.com/AYLA_Africa?t=6x0erzLVknJBte-fhlDG1g&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon twitter"
        >
          <FaTwitter />
          <span>Twitter</span>
        </a>

        <a
          href="https://www.tiktok.com/@ayla.africa?_t=ZM-8yVqO4A2YZc&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon linkedin"
        >
          <FaTiktok />
          <span>Tiktok</span>
        </a>
        <a
          href="https://youtube.com/@ayla_africa?si=J5syepp1MW8cj7CB"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon linkedin"
        >
          <FaYoutube />
          <span>YouTube</span>
        </a>
        <div className="group-link">
  <h3>Join Our Community</h3>
  <a 
    href="https://chat.whatsapp.com/EcaL3EGZjdrByx0KUSBr5r?mode=ac_t" 
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <i className="fab fa-whatsapp"></i> Join WhatsApp Group
  </a>
</div>

      </div>
    </div>
  );
};

export default Contact;
