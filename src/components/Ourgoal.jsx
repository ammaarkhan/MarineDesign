import React from 'react';
import { ourgoals } from '../assets';

const Ourgoal = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between bg-[#183049] items-center py-8 md:py-12 px-4 md:px-12"
      style={{height: '65vh'}}>
        
        <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Our Goals</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
              This is a sample paragraph. We'll provide more detailed information about who we are and what we do here at UBC Okanagan's Marine Design Club. Our mission, goals, and the inspiration behind our endeavors will be outlined here.
          </p>
        </div>

         {/* Image on the Right */}
         <div className="flex-1 mb-8 md:mb-0">
          <img src={ourgoals} alt="Description of the Image" className="max-w-full h-auto mx-auto" />
        </div>
    </section>
  );
}

export default Ourgoal;