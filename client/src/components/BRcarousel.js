import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import clinicsActions from "../redux/actions/clinics.actions";

const BRCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="change-size" onSelect={handleSelect}>
      {/* {ava.map((image) => ( */}
      <Carousel.Item>
        <img
          src="https://www.bannerhealth.com/-/media/images/project/bh/location-images/windsor/banner-health-clinic-obgyn-family-and-sports-medicine-main.ashx?h=318&w=478&hash=94C06A6B126F1D0E8ECA778B6530BD54"
          alt="clinic images"
          className="d-block w-100"
        />
      </Carousel.Item>
      {/* ))} */}
    </Carousel>
  );
};

export default BRCarousel;
