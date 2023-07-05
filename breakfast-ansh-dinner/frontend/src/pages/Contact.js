import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      message,
    };


    // Make an HTTP POST request to the server-side route
    axios
      .post('/contact-add', formData)
      .then(res => {
        console.log(res.data)
        setIsSubmitted(true);
      }).catch(err => console.log(err))
  };

  return (
    <div className="contactpage">
      <h1>I will try to get back as soon as possible!</h1>
      {isSubmitted ? (
        <div>
          <p>Thank you for your message!</p>
          <p>I will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Message:</label><br />
            <textarea value={message} className="cp--message-box" onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
