import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const BRcarousel = () => {
  const [index, setIndex] = useState();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel onSelect={handleSelect}>
      <Carousel.Item className="sm">
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/healthcare-photos-picture-id954802966?k=6&m=954802966&s=612x612&w=0&h=wQ35IRVMHGPLLbvpRVO1ADS_ce6VwbGaGzPkEP-69oM="
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="sm">
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/WGjXfbrrrA3uDZju9MX3Obd23YcvYK9soUOZUaULz6qrDNbgBe_6fIe48PixLrOS3Q_D0PqWJU727-yMqKNab8efuQRcIVSyg_Rv3nY3KEMv"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="sm">
        <img
          className="d-block w-100"
          src="https://easysalon.vn/wp-content/uploads/2019/11/clinic-spa-la-gi-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BRcarousel;
