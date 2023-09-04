// src/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#183049] py-4 flex justify-center space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
        <FaFacebook size={20} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
        <FaInstagram size={20} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
        <FaTwitter size={20} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300">
        <FaLinkedin size={20} />
      </a>
    </footer>
  );
}

export default Footer;