// src/ContactUs.tsx
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import styles from './ContactUs.module.css';

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any; }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_8uv1p6l',
        'template_lt68v8y',
        {
          from_name: form.name,
          to_name: "Ammaar",
          from_email: form.email,
          to_email: "ammaarkhan03@gmail.com",
          message: form.message,
        },
        'xY6XZCeqxsKRQbkiI'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label className={styles.formLabel}>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label className={styles.formLabel}>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;