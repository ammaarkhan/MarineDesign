import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { teamimage, altium } from "../assets";

function Sponsorships() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_SPONSORSHIP_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sponsorImages = [
    { src: altium, alt: "Altium" },
    // Add more sponsors as needed
  ];

  return (
    <div className="px-4 md:px-12 xl:px-0">
      <section
        id="sponsorships"
        className="bg-[#183049] py-12 px-4 md:px-12 min-h-[75vh] flex flex-col justify-between rounded-2xl"
      >
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-white">
          Interested in sponsoring us? Contact us below!
        </h2>
        {/* <div className="flex-grow flex flex-col justify-center"> */}
        <p className="text-center mb-6">
          <a
            href="https://drive.google.com/file/d/1e94q_A5U61UJgQLaT11xT2BVylUm3YE6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-sm"
          >
            Download Sponsorship Package
          </a>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Form container */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button type="submit">Submit</Button>
                {messageSent && (
                  <p className="mt-4 text-sm text-white">
                    We have received your message! We will get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* Image container */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Uncomment and replace `teamimage` with your image path */}
            <img
              src={teamimage}
              alt="Team Image"
              className="w-5/6 h-auto rounded-lg mb-6"
            />
          </div>
        </div>
      </section>
      {/* Current Sponsors Section */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-2">
          Our Current Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsorImages.map((sponsor, index) => (
            <div key={index} className="w-40 md:w-56">
              <img src={sponsor.src} alt={sponsor.alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sponsorships;
