import React from "react";
import testimonialsTop from "../../../assets/bg-pattern-home-4-about-3.svg";
import testimonialsBottom from "../../../assets/bg-pattern-home-5.svg";
import quotes from "../../../assets/icon-quotes.svg";
import Kady from "../../../assets/avatar-kady.jpg";
import Aiysha from "../../../assets/avatar-aiysha.jpg";
import Arthur from "../../../assets/avatar-arthur.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-top-image-wrapper">
        <img src={testimonialsTop} alt="testimonials pattern" />
      </div>
      <h2>
        Delivering real results for top companies. Some of our
        <span className="testimonials-highlight-span"> success stories.</span>
      </h2>

      <section className="testimonials-section">
        <div className="background-quotes">
          <img src={quotes} alt="quotes" />
        </div>
        <p className="quote">
          “The team perfectly fit the specialized skill set required. They
          focused on the most essential features helping us launch the platform
          eight months faster than planned.”
        </p>
        <div className="author">Kady Baker</div>
        <div className="job-position">Product Manager at Bookmark</div>
        <div className="avatar-wrapper">
          <img src={Kady} alt="Kady" />
        </div>
      </section>

      <section className="testimonials-section">
        <div className="background-quotes">
          <img src={quotes} alt="quotes" />
        </div>

        <p className="quote">
          “We needed to automate our entire onboarding process. The team came in
          and built out the whole journey. Since going live, user retention has
          gone through the roof!”
        </p>
        <div className="author"> Aiysha Reese </div>
        <div className="job-position">Founder of Manage</div>
        <div className="avatar-wrapper">
          <img src={Aiysha} alt="Aiysha" />
        </div>
      </section>

      <section className="testimonials-section">
        <div className="background-quotes">
          <img src={quotes} alt="quotes" />
        </div>

        <p className="quote">
          “Amazing. Our team helped us build an app that delivered a new
          experience for hiring a physio. The launch was an instant success with
          100k downloads in the first month.”
        </p>
        <div className="author">Arthur Clarke </div>
        <div className="job-position">Co-founder of MyPhysio</div>
        <div className="avatar-wrapper">
          <img src={Arthur} alt="Arthur" />
        </div>
      </section>

      <div className="testimonials-bottom-image-wrapper">
        <img src={testimonialsBottom} alt="testimonials pattern" />
      </div>
    </div>
  );
};

export default Testimonials;
