import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState(''); // For storing validation error

  // Function to validate email using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email before sending
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return; // Stop form submission if email is invalid
    }
    setEmailError('');

    // Use EmailJS to send the email
    emailjs.send(
      'service_lz7c0oe', // Replace with your Service ID
      'template_yepsusj', // Replace with your Template ID
      formData,
      'X5s3E9YjzYWSxc02a' // Replace with your User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send the message, please try again.');
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer id="contact" style={styles.footer}>
      {/* Contact Details */}
      <div style={styles.contactDetails}>
        <h3 style={styles.heading}>Drop Me a Message</h3>
        
        <p><i className="fas fa-phone"></i> +971 569202806</p>
        <p><i className="fas fa-envelope"></i> adhilaismail2@gmail.com</p>
        <p><i className="fas fa-map-marker-alt"></i> House: Al Nahda, Sharjah, United Arab Emirates</p>
      </div>

      {/* Contact Form */}
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {emailError && <p style={styles.error}>{emailError}</p>} {/* Display error message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.input}
            rows="4"
            required
          ></textarea>
          <button type="submit" style={styles.sendButton}>Send</button>
        </form>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundImage: 'linear-gradient(to right, #271629, #532657)', // Gradient background
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between', // Align contact details and form side by side
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '50px', // Increase padding for a clean layout
    textAlign: 'left',
  },
  contactDetails: {
    flex: '1',
    maxWidth: '45%', // Take about half of the space
    padding: '20px',
    color: '#fff',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  formContainer: {
    flex: '1',
    maxWidth: '45%',
    backgroundColor: '#1c1c1c', // Background color for the form container
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Shadow for the form
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2c2c2c', // Dark background for input fields
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#f107a3',
    color: '#fff',
    padding: '15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    marginTop: '5px',
  },
};

export default Footer;
