import React from 'react';
import { aboutus } from '../assets';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center py-8 md:py-12 px-4 md:px-12 bg-white"
    style={{height: 'auto md:65vh'}}>
      
      {/* Image on the Left */}
      <div className="flex-1 mb-8 md:mb-0">
        <img src={aboutus} alt="Description of the Image" className="max-w-full h-auto mx-auto" />
      </div>
      
      {/* Text Content on the Right */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#183049]">Who are we?</h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
            This is a sample paragraph. We'll provide more detailed information about who we are and what we do here at UBC Okanagan's Marine Design Club. Our mission, goals, and the inspiration behind our endeavors will be outlined here.
        </p>
        <a 
            href="#join" 
            className="inline-block px-6 py-3 font-semibold text-white bg-[#183049] hover:bg-opacity-95 rounded-md">
            Join Us
        </a>
      </div>
    </section>
  );
}

export default About;