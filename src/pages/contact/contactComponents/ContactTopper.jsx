import React from "react";
import person from "../../../assets/icon-person.svg";
import cog from "../../../assets/icon-cog.svg";
import chart from "../../../assets/icon-chart.svg";

const ContactTopper = () => {
  return (
    <div>
      <h2>Contact</h2>
      <span className="contact-highlight-span">Ask us about</span>
      <section className="contact-topper-section">
        <img src={person} alt="person" />
        <p>The quality of our talent network</p>
      </section>
      <section className="contact-topper-section">
        <img src={cog} alt="cog" />

        <p>Usage & implementation of our software</p>
      </section>
      <section className="contact-topper-section">
        <img src={chart} alt="chart" />

        <p>How we help drive innovation</p>
      </section>
    </div>
  );
};

export default ContactTopper;
