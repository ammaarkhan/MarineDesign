import React from "react";
import styles from "../style";
import videoSrc from "../assets/sub-video.mp4";

const Hero = () => (
  <div className="px-4 md:px-12">
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} justify-center items-center rounded-2xl relative`}
      style={{ height: "55vh", overflow: "hidden" }} // Add overflow: hidden to the section style
    >
      {/* Video as Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover rounded-2xl" // Optionally add rounded-2xl here for consistency
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 w-full text-center">
        <h1 className={`${styles.heading2} my-4`}>Marine Design Club</h1>
        <p className={`${styles.paragraph} mb-8`}>
          Crafting the Future of Marine Design at UBC Okanagan.
        </p>
      </div>
    </section>
  </div>
);

export default Hero;
