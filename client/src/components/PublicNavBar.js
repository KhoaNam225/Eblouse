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
  return <div></div>;
};

export default PublicNavbar;
