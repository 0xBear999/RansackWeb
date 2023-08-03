import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const db = getDatabase();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get a new key for the contact form submission
    const newSubmissionRef = push(ref(db, 'submissions'));

    // Save the form data to the database
    set(newSubmissionRef, {
      name,
      email,
      message,
    });

    // Set the submitted flag to true
    setSubmitted(true);
  };
  return (
    <div className='contact-us-container'>
      <h1 className='jkl'>Contact Us</h1>
      {submitted ? (
        <div className='thank-you-message'>
          <p>Thank you for contacting us!</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='input-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
