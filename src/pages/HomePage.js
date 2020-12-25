import React from "react";
import SearchForm from "../components/SearchForm";
import ControlledCarousel from "../components/ControlledCarousel";

const HomePage = () => {
  return (
    <div className="wrapper">
      <section className="Search-section">
        <div className="status">
          <h1 className="feel">Feeling mehh? Find a doctor.</h1>
        </div>
        <div className="Search-control">
          <ControlledCarousel sliderHeight={400} sliderWidth={400} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
