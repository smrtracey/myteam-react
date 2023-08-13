import React from "react";
import AboutCard from "./AboutCard";

import aboutBottomImage from "../../../assets/bg-pattern-home-4-about-3.svg";
import directorsImage from "../../../assets/bg-pattern-about-2-contact-1.svg";

const AboutDirectors = () => {
  const cardData = [
    {
      name: " Nikita Marks ",
      jobPosition: "Founder & CEO",
      image: "nikita",
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
    },
    {
      name: "Cristian Duncan ",
      jobPosition: "Co-founder & COO",
      image: "christian",
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
    },
    {
      name: "Cruz Hamer",
      jobPosition: "Co-founder & CTO",
      image: "cruz",
      quote: `Technology is at the forefront of enabling distributed teams. That's where we come in.`,
    },
    {
      name: "Drake Heaton ",
      jobPosition: "Business Development Lead",
      image: "drake",
      quote: `Hiring similar people from similar backgrounds is a surefire way to stunt innovation.`,
    },
    {
      name: "Griffin Wise  ",
      jobPosition: "Lead Marketing",
      image: "griffin",
      quote: `Unique perspectives shape unique products, which is what you need to survive these days.`,
    },
    {
      name: "Aden Allan ",
      jobPosition: "Head of Talent",
      image: "aden",
      quote: `Empowered teams create truly amazing products. Set the north star and let them follow it.`,
    },
  ];

  return (
    <div className="directors">
      <img
        src={directorsImage}
        alt="directors pattern"
        className="directors-image"
      />
      <h2>Meet the directors</h2>

      <div className="director-cards-wrapper">
        {cardData.map((data, index) => {
          return <AboutCard data={data} key={index} />;
        })}
      </div>

      <div className="about-bottom-image">
        <img src={aboutBottomImage} alt="about-pattern" />
      </div>
    </div>
  );
};

export default AboutDirectors;
