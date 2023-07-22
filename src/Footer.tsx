// src/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
    </footer>
  );
}

export default Footer;
