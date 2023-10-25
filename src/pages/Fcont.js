import React, { useState } from "react";
import Fside from "../components/Fside";
import Fhead from "../components/Fhead";
import Swal from "sweetalert2"; // Import SweetAlert

function Fcont() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, such as sending data to a server.

    // Assuming the submission was successful, update the state and show a SweetAlert.
    setIsSubmitted(true);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been successfully submitted!",
    });
  };

  return (
    <div className="app">
      <Fside />
      <div className="app-main">
        <Fhead />
        <div className="contact-container">
          <h1 style={{ fontFamily: "Footlight MT Light" }}>Contact Us</h1>
          <p>
            If you have any questions, comments, or feedback, please don't
            hesitate to get in touch with us. We're here to assist you.
          </p>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@sportsmanagementsystem.com">
                info@sportsmanagementsystem.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Sports Management Street, Erode
              12345, Tamilnadu
            </p>
          </div>

          {isSubmitted ? (
            // No message to display when using SweetAlert
            null
          ) : (
            <div className="contact-form">
              <h2>Contact Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fcont;
