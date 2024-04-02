import React from "react";
import { ourgoals } from "../assets";
import ImageContainer from "./ImageContainer";

const Ourgoal = () => {
  return (
    <div className="px-4 md:px-12">
      <section className="flex flex-col md:flex-row justify-center md:justify-between bg-[#183049] items-center py-8 md:py-12 px-4 md:px-12 rounded-2xl h-[40rem]">
        <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Our Goals
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
            Our ambition is to compete at the forefront of engineering
            competitions, specializing in autonomous underwater vehicles.
            Rooted in the heart of the Okanagan, we leverage the pristine waters 
            of the Okanagan Lake as our proving ground. Through these challenges, 
            our commitment is not just to produce state-of-the-art marine designs, 
            but also to cultivate the next generation of exceptional engineers.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="flex-1 mb-8 md:mb-0">
          <ImageContainer
            src={ourgoals}
            alt="Okanagan valley"
            className="sm:w-3/4 w-4/5 h-auto mx-auto max-w-[600px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Ourgoal;
