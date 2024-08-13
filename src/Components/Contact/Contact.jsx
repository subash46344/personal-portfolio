import React, { useState, useRef } from "react";
import "./ContactStyle.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});

      emailjs
        .sendForm('service_ryl2kbj', 'template_te2ckc3', form.current, 'YagvHfQxEv_hX0dPy')
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitted(true); // Set form as submitted
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsSubmitted(false);
          },
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="contact" className="contact_container">
      <div className="resume_heading" data-aos="fade-up">
        <h2>Contact</h2>
        <p className="resume_heading_line"></p>
        <p className="resume_heading_paragraph">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="contact_container_block" data-aos="zoom-in" >
        <div className="contact_container_block_card">
          <i className="fa fa-map-marker"></i>
          <div className="contact_container_block_card_info">
            <h3>Address</h3>
            <p>Hn. 485 Mamura, Noida, India 201305</p>
          </div>
        </div>
        <div className="contact_container_block_card">
          <i className="fa fa-phone"></i>
          <div className="contact_container_block_card_info">
            <h3>Call Us</h3>
            <p>+91 7492074655</p>
          </div>
        </div>
        <div className="contact_container_block_card">
          <i className="fa fa-envelope"></i>
          <div className="contact_container_block_card_info">
            <h3>Email Us</h3>
            <p>officialsubash74@gmail.com</p>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        <h1 className="submission_status">Your Application Form is submitted successfully.</h1>
      ) : (
        <form className={`contact_sub_container ${isSubmitted ? 'hide' : ''}`} ref={form} onSubmit={sendEmail} data-aos="fade-up">
          <div className="contact_sub_container_info">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span>{errors.name}</span>}
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <input
            className="subject_input"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span>{errors.subject}</span>}
          <textarea
            className="message_textarea"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span>{errors.message}</span>}
          <button className="contact_sub_container_btn" type="submit">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
