// src/Footer.tsx
import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../style";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="w-full  px-4 md:px-12">
        <div className="flex flex-row justify-center">
          <footer
            className={`bg-[#183049] py-4 flex justify-center space-x-4 rounded-t-2xl ${styles.boxWidth}`}
          >
            <a
              href="https://www.instagram.com/okmarinedesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/okanagan-marine-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:okmarinedesign@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-600 transition duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
