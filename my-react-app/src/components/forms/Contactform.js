import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../forms/Contactform.css';

const ContactForm = () => {
  /* Setting the status to "Send melding" and then it is alerting the result.status. */
  const [status, setStatus] = useState("Send melding");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sender melding...");
    const { name, email, message } = e.target.elements;
/* Creating an object with the values from the form. */
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
/* Sending the data to the server. */
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
/* Setting the status to "Send melding" and then it is alerting the result.status. */
    setStatus("Send melding");
    let result = await response.json();
    alert(result.status);
  };
/* Returning the form. */
  return (
    /* A form that is sending the data to the server. */
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" required>Navn:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email" required>Epost:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message" required>Melding:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;