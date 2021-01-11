import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchListPage = () => {
  return (
    <div className="search-list">
      <section>
        <div className="info-updated">
          <ul className="list-unstyled">
            <li>More than ... clinics nearby you</li>
            <li>Date:</li>
            <li>...: patients</li>
          </ul>
        </div>
      </section>
      <section className="list-of-clinics">
        <div className="first-item d-flex">
          <div className="col-5 left-side">
            {/* <ControlledCarousel sliderWidth={400} sliderHeight={250} /> */}
          </div>
          <div className="col-7 right-side">
            <h4>Clinic with many major</h4>
            <h2>Clinic name</h2>

            <i>
              rating<span>(sum of reviews)</span>
            </i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchListPage;
