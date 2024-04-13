import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null); // State variable for errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State variable for submission state
  const [success, setSuccess] = useState(false); // State variable for successful submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set to true before sending the request

    try {
      const response = await axios.post('/api/contacts', {
        name,
        email,
        message
      });
      console.log(response.data); // Success message or saved contact data
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true); // Set to true on successful submission
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'An error occurred'); // Use response data if available
    } finally {
      setIsSubmitting(false); // Set back to false after request finishes
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form flex flex-col space-y-4">
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-gray-700 font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-gray-700 font-medium">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-gray-700 font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      {isSubmitting ? (
        <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50">
          Sending...
        </button>
      ) : (
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      )}

      {success && (
        <p className="text-green-500 mt-2">Message sent successfully!</p>
      )}
    </form>
  );
};

export default ContactForm;
