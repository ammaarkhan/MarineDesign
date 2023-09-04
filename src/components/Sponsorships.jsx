import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Sponsorships() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_SPONSORSHIP_TEMPLATE_KEY, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            setMessageSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='sponsorships' className="bg-[#183049] py-12 px-4 md:px-12">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-white">Interested in sponsoring us? Contact us below!</h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-white">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="user_name" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-white">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="user_email" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-white">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                        Submit
                    </button>
                    {messageSent && <p className="mt-4 text-sm text-white">We have received your message! We will get back to you soon.</p>}
                </div>
            </form>
        </section>
    );
}

export default Sponsorships;