import React, { useState } from "react";
import Button from "../../../components/button/Button";

import "./contactForm.scss";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};
    if (formData.name === "") {
      newErrors.name = "this field is required";
    }
    if (formData.email === "") {
      newErrors.email = "this field is required";
    }
    if (formData.message === "") {
      newErrors.message = "this field is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-input-wrapper">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="contact-input-wrapper">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="contact-input-wrapper">
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
          />
        </div>
        <div className="contact-input-wrapper">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </div>
        <div className="contact-input-wrapper">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <Button
          variant="secondary"
          onClick={handleSubmit}
          buttonText="submit"
          extraClass="contact-submit-button"
        />
      </form>
    </div>
  );
};

export default ContactForm;
