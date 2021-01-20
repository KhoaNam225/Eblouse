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

const SearchListPage = () => {
  const clinics = useSelector((state) => state.clinics.clinics);
  const isLoading = useSelector((state) => state.clinics.isLoading);

  const dispatch = useDispatch();
  const params = useParams();
  const searchTerm = params.searchTerm;
  console.log("sdaf", searchTerm);

  useEffect(() => {
    dispatch(clinicsActions.getSearchCategory(searchTerm));
  }, [dispatch]);

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
        <hr />
        <div className="first-item d-flex">
          {clinics.map((clinic) => (
            <Card clinic={clinic} />
          ))}
          <div className="text-below"></div>
        </div>

        <hr />
      </section>
    </div>
  );
};

export default SearchListPage;
