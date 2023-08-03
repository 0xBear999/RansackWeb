import React, { useState } from 'react';
import './Support.css';
import { getFirestore } from 'firebase/firestore';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getFirestore();
    try {
      const docRef = await db.collection('support').add({
        name,
        email,
        message,
      });
      console.log('Document written with ID: ', docRef.id);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="n">
      <div className="support-page-header">
        <h1>Support</h1>
        <p>If you need help, you've come to the right place.</p>
      </div>
      <div className="support-page-content">
        <h2>Common Questions</h2>
        <p>Here are some of our most frequently asked questions.</p>
        <ul>
          <li>
            <span>How do I create an account?</span>
            <span className="answer">To create an account, simply click on the "Sign Up" button in the top right corner of the page and follow the instructions.</span>
          </li>
          <li>
            <span>How do I reset my password?</span>
            <span className="answer">To reset your password, click on the "Forgot Password" link on the login page and follow the instructions.</span>
          </li>
          <li>
            <span>How do I contact support?</span>
            <span className="answer">To contact support, click on the "Contact Us" link in the footer and fill out the form.</span>
          </li>
        </ul>
      </div>
      <div className="support-page-sidebar">
        <h2>Still Need Help?</h2>
        <p>Fill out the form below to contact support.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
