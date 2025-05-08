import React, { useState } from 'react';
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-info">
            Got a question or need assistance? Reach out to us—we’re here to help! Fill out the form below or use the contact details provided, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-block">
            <div className="form-field">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form-input"
              />
            </div>
            <div className="form-field">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="form-textarea"
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="form-submit-btn">
              Send Message
            </button>
          </div>

          {/* Contact Details */}
          <div className="contact-details-block">
            <h2 className="details-heading">Get in Touch</h2>
            <ul className="details-list">
              <li className="details-item">
                <span className="details-label">Phone:</span>
                <span className="details-value">+91 9876543210</span>
              </li>
              <li className="details-item">
                <span className="details-label">Email:</span>
                <span className="details-value">support@adarshcollege.edu</span>
              </li>
              <li className="details-item">
                <span className="details-label">Address:</span>
                <span className="details-value">
                  123 Adarsh Road, Education City, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;