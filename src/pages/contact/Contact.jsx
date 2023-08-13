import React from "react";
import ContactTopper from "./contactComponents/ContactTopper";
import ContactForm from "./contactComponents/ContactForm";

import contactPagePattern from "../../assets/bg-pattern-contact-2.svg";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <ContactTopper />
      <ContactForm />

      <img
        src={contactPagePattern}
        alt="contact pattern"
        className="contact-pattern"
      />
    </div>
  );
};

export default Contact;
