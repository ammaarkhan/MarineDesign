import React from "react";
import { whoarewe } from "../assets";
import ImageContainer from "./ImageContainer";
import Button from "./Button";

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center md:justify-between items-center py-8 md:py-12 px-4 md:px-12"
      style={{ height: "auto md:75vh" }}
    >
      {/* Image on the Left */}
      <div className="flex-1 mb-8 md:mb-0 flex justify-center">
        <ImageContainer
          src={whoarewe}
          alt="Okanagan valley"
          className="sm:w-2/4 md:w-4/5 lg:w-5/6 xl:w-6/6 h-auto mx-auto"
        />
      </div>

      {/* Text Content on the Right */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 pt-0 md:p-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#183049]">
          Who are we?
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 max-w-xl">
          We're thrilled to introduce Okanagan Marine Design at UBC Okanagan. We
          have two main focus areas: Electric Propulsion Boats and Autonomous
          Underwater Vehicles. This is the first and only club at UBCO dedicated
          to autonomous vehicles! If you're as passionate about engineering and
          technology as we are, this club is your next port of call.
        </p>
        <div>
          <Button type={"link"} href="/joinus">
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
