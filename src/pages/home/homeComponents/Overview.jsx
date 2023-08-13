import React from "react";
import overviewBgImage from "../../../assets/bg-pattern-home-3.svg";
import person from "../../../assets/icon-person.svg";
import cog from "../../../assets/icon-cog.svg";
import chart from "../../../assets/icon-chart.svg";

const Overview = () => {
  return (
    <div className="overview-wrapper">
      <div className="overview-topper">
        <div className="topper-text">
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
        <div className="overview-background-image-wrapper">
          <img src={overviewBgImage} alt="overview background graphic" />
        </div>
      </div>

      <section className="overview-section section-1">
        <div className="overview-section-image-wrapper">
          <img src={person} alt="person" />
        </div>
        <h3>Experienced Individuals</h3>
        <p>
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </p>
      </section>
      <section className="overview-section section-2">
        <div className="overview-section-image-wrapper">
          <img src={cog} alt="cog" />
        </div>
        <h3>Easy to Implement</h3>
        <p>
          Our processes have been refined over years of implementation meaning
          our teams always deliver.
        </p>
      </section>
      <section className="overview-section section-3">
        <div className="overview-section-image-wrapper">
          <img src={chart} alt="chart" />
        </div>
        <h3>Enhanced Productivity </h3>
        <p>
          Our customized platform with in-built analytics helps you manage your
          distributed teams.
        </p>
      </section>
    </div>
  );
};

export default Overview;
