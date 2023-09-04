import React from 'react';
import { monacologo, peplogo, robosub } from '../assets';

const Ourprojects = () => {
  return (
    <section id='projects' className="flex flex-col justify-center items-center py-8 md:py-12 px-4 md:px-12 space-y-8" 
    style={{minHeight: '65vh'}}>

      {/* Main Heading */}
      <h2 className="text-4xl font-bold mb-4 text-[#183049] w-full text-center">
        Our Projects
      </h2>
      
      <div className="flex flex-col md:flex-row w-full md:space-x-8 space-y-8 md:space-y-0 items-center">
        <div className="flex-1 flex flex-col items-center">
          {/* <span className="text-2xl font-bold mb-4 text-[#183049]">Electric Propulsion</span> */}
          <img src={peplogo} alt="Description of the Image" className="md:max-w-[350px] max-w-[280px] h-auto mx-auto" />
        </div>

        <div className="flex-1 flex flex-col items-center">
          {/* <span className="text-2xl font-bold mb-4 text-[#183049]">Electric Propulsion</span> */}
          <img src={monacologo} alt="Description of the Image" className="md:max-w-[350px] max-w-[280px] h-auto mx-auto" />
        </div>

        <div className="flex-1 flex flex-col items-center">
          {/* <span className="text-2xl font-bold mb-4 text-[#183049]">AUV</span> */}
          <img src={robosub} alt="Description of the Image" className="md:max-w-[350px] max-w-[280px] h-auto mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Ourprojects;
