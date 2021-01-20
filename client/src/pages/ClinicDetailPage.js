import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import clinicActions from "../redux/actions/clinics.actions";
import LoadingSpinner from "../components/LoadingSpinner";
import { MultiItemsCarousel } from "../components/Carousel";

const ClinicShowcase = ({ clinic }) => {
  const { name, specializations, address, avgRating, reviews, images } = clinic;
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="showcase-wrapper">
      <div className="clinic-basic-info">
        <div className="name-address">
          <h2 className="clinic-name">{name}</h2>
          <div className="divider"></div>
          <p className="clinic-address">{address}</p>
        </div>
        <div className="rating-specialization">
          <p className="rating">
            <i style={{ color: "#fdb827" }} className="fas fa-star"></i>
            {`${avgRating} (${reviews.length})`}
          </p>
          <ul className="specialization">
            {specializations.map((spec, index) => (
              <li key={index}>{spec.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="clinic-images">
        <div className="main-image">
          <img src={images[selectedImage]} alt="clinic" />
        </div>
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              className="showcase-image-wrapper"
              key={index}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt="more-clinic" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const ClinicInfo = ({ clinic }) => {
  const {
    name,
    doctors,
    statement,
    services,
    registerNumber,
    languages,
  } = clinic;
  const CertificateDisplayCard = ({title, content, icon}) => {
    const iconStyle = {
      padding: "0px 20px",
      fontSize: "2.5em",
    };

    const headerStyle = {
      margin: 0,
      padding: "5px 10px",
      fontSize: "0.8em",
      fontWeight: "bold",
    };

    const contentStyle = {
      margin: 0,
      padding: "5px 10px",
      fontSize: "0.8em",
      fontStyle: "italic",
    };

    return (<>
    <div className="certificates-display">
      <div style={iconStyle}>{icon}</div>
    </div>
    <h5 style={headerStyle}>{title}</h5>
    </>
    )
};
const ClinicDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const clinicId = params.id;

  const clinic = useSelector((state) => state.clinics.clinic);
  const isLoading = useSelector((state) => state.clinics.isLoading);

  useEffect(() => {
    dispatch(clinicActions.getClinic(clinicId));
  }, [dispatch]);

  const sectionStyle = {
    borderTop: "2px solid #dfe0df",
    padding: "20px 0px",
  };
  return isLoading ? (
    <LoadingSpinner animation="border" color="success" />
  ) : (
    <div className="wrapper">
      <section style={sectionStyle} className="clinic-showcase">
        {clinic ? <ClinicShowcase clinic={clinic} /> : null}
      </section>
      <section className="clinic-info" style={sectionStyle}>
        {clinic ? <ClinicInfo clinic={clinic} /> : null}
      </section>
      <section className="clinic-reviews" style={sectionStyle}>
        {clinic ? <ClinicReview clinic={clinic} /> : null}
      </section>
      <section className="clinic-map" style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>Our Location</h2>
      </section>
    </div>
  );
};

export default ClinicDetailPage;
