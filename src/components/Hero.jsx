import React from "react";
import styles from "../style";

const Hero = () => (
  <div className="px-4 md:px-12">
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} bg-[#183049] justify-center items-center rounded-2xl`}
      // style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}
      style={{ height: "55vh" }}
    >
      {/* Overlay to darken the image a bit and make text more readable */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
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
