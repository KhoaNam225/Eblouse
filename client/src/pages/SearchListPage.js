import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import "../style/MultiItemsCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clinicsActions from "../redux/actions/clinics.actions";
import BRcarousel from "../components/BRcarousel";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import "../style/SearchListPage.css";

const SearchListPage = () => {
  // const listClinic = useSelector((state) => state.listClinic.listClinic);
  // const isLoading = useSelector((state) => state.listClinic.isLoading);

  // const dispatch = useDispatch();
  // const params = useParams();
  // const query = params.query;
  // console.log("sdaf", query);

  // useEffect(() => {
  //   dispatch(clinicsActions.getSearchCategory(query));
  // }, [dispatch]);
  const listClinics = [
    {
      name: "Hoa Hao Clinic",
      address: "112 3/2 st., 9 ward",
      service: ["endscopy", "noi soi", "xet nghiem"],
      insurance: "accepted",
      rating: "4.5",
    },
    {
      name: "Bs.Hoa Clinic",
      address: "112 3/2 st., 9 ward",
      service: ["endscopy", "noi soi", "xet nghiem"],
      insurance: "accepted",
      rating: "4.5",
    },
    {
      name: "Y duoc Clinic",
      address: "112 3/2 st., 9 ward",
      service: ["endscopy", "noi soi", "xet nghiem"],
      insurance: "accepted",
      rating: "4.5",
    },
    {
      name: "Y hoa Clinic",
      address: "112 3/2 st., 9 ward",
      service: ["endscopy", "noi soi", "xet nghiem"],
      insurance: "accepted",
      rating: "4.5",
    },
  ];

  return (
    <>
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
          <div className="first-item">
            {listClinics.map((clinic) => (
              <Card clinic={clinic} images={clinic.avaUrl} />
            ))}
            <div className="text-below"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchListPage;
