import React from "react";
import { Container } from "react-bootstrap";
import BRcarousel from "../components/BRcarousel";
import "../style/SearchListPage.css";

const Card = ({ clinic, images }) => {
  return (
    <div className="wrap-card">
      <div className="all">
        <div className="carousel">
          <BRcarousel images={clinic.avaUrl} />
        </div>
        <div className="information">
          <h3>{clinic.name}</h3>
          <h4 className="text-address">{clinic.address}</h4>
          {/* <hr className="short-line" /> */}
          <ul className="list-service d-flex">
            <li>{clinic.service[0]}</li>
            <li className="list-1">{clinic.service[1]}</li>
            <li className="list-2">{clinic.service[2]}</li>
          </ul>
          {clinic.insurance ? (
            <p>
              Insurance: <i class="fa fa-check" aria-hidden="true"></i>
            </p>
          ) : null}

          <i
            class="fa fa-star position-end"
            style={{ color: "red" }}
            aria-hidden="true"
          >
            <span>{clinic.rating}</span>
          </i>
          <i class="fa fa-heart position-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
