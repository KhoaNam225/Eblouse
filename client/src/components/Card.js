import React from "react";
import { Container } from "react-bootstrap";
import BRcarousel from "../components/BRcarousel";

const Card = () => {
  return (
    <Container>
      <div className="all">
        <div className="carousel">
          <BRcarousel />
        </div>
        <div className="information">
          <h3>Name PK</h3>
          <h1>address</h1>
          <hr className="short-line" />
          <br></br>
          <br></br>
          <br></br>
          <i></i>
        </div>
      </div>
    </Container>
  );
};

export default Card;