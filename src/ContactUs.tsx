// src/ContactUs.tsx
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import styles from './ContactUs.module.css';
import { handleSubmit } from './handleSubmit';

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

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form onSubmit={(e)=> handleSubmit(e, form, setLoading, setForm)}>
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