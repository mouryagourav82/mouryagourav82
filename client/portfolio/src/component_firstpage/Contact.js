import React from 'react';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <section id='contact1' className="contact flex flex-col justify-center items-center min-h-screen px-4 py-8 md:px-8 md:py-16">
      {/* Contact Information */}
      <div className="contact-info flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-gray-700 text-center mb-4">
          Feel free to contact me using the form below or reach out via my social media profiles.
        </p>
        {/* Replace with your actual contact details */}
        <ul className="text-gray-700 text-center space-y-2">
          <li>
            <a href="mailto:mauryagourav82@gmail.com" className="hover:text-blue-500">
            mauryagourav82@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </section>
  );
};

export default Contact;
