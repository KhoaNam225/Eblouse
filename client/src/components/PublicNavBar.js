import { Modal, Button, Form, Col, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";
import usersActions from "../redux/actions/users.actions";
import logo from "../images/ebloue-logo.png";
import "../style/PublicNavBar.css";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const PublicNavbar = () => {
  const BOOKING_SEARCH_MODE = 1;
  const REVIEWS_SEARCH_MODE = 2;

  const [clinicName, setClinicName] = useState("");
  const [date, setDate] = useState(null);
  const [peopleNum, setPeopleNum] = useState(0);
  const [searchMode, setSearchMode] = useState(BOOKING_SEARCH_MODE);
  const [showFullClicked, setShowFullClicked] = useState(false);
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showUserDetailInputModal, setShowUserDetailInputModel] = useState(
    false
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loading);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollOffsetY(position);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(true);
  };

  const showUserDetailModal = () => {
    setShowUserDetailInputModel(true);
  };

  const hideUserDetailModal = () => {
    setShowUserDetailInputModel(false);
  };

  const handleUserLogin = () => {
    dispatch(usersActions.userLogin());
    setShowModal(false);
    setShowUserDetailInputModel(false);
  };
  const loginWithFacebook = (response) => {
    dispatch(authActions.loginFacebook(response.acessToken));
    setShowModal(false);
    setShowUserDetailInputModel(false);
  };
  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogle(response.acessToken));
    setShowModal(false);
    setShowUserDetailInputModel(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FullNavBar = () => {
    return (
      <>
      <div className="nav-bar">
        <div id="logo">
          <img src={logo} alt="Eblouse" width="100px"/>
        </div>
        <div className="nav-middle">
          <button className="nav-btn">
            Book an appointment
          </button>
        </div>
      </div>
      </>
    )
  }

export default PublicNavbar;
