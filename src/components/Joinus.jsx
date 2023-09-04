// src/ContactForm.jsx
import React, { useState } from 'react';

function Joinus() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, for example, send data to the server.
        console.log(formData);
    };

    return (
        <section id='joinus' className="bg-[#183049] py-12 px-4 md:px-12">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-white">Join the Marine Design Team!</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-white">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-white">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="inquiry" className="block mb-2 text-sm font-semibold text-white">Inquiry:</label>
                    <textarea 
                        id="inquiry" 
                        name="inquiry" 
                        rows={4}
                        value={formData.inquiry} 
                        onChange={handleInputChange} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Joinus;
