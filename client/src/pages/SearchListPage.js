import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import "../style/MultiItemsCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clinicsActions from "../redux/actions/clinics.actions";
import BRcarousel from "../components/BRcarousel";
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
          <div className="left-side">
            <BRcarousel />
          </div>
          <div className="right-side">
            {isLoading ? (
              <LoadingSpinner animation="border" color="danger" />
            ) : (
              clinics.map((clinic) => (
                <div className="text-above">
                  <h1>{clinic.name}</h1>
                </div>
              ))
            )}
            <div className="text-below"></div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default SearchListPage;
