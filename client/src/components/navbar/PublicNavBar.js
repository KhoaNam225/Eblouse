import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FullNavBar from "./FullNavBar";
import PartialNavBar from "./PartialNavBar";
import LoginForm from "./LoginForm";
import UserDetailInputForm from "./UserDetailInputForm";

import logo from "../../images/ebloue-logo.png";
import "../../style/PublicNavBar.css";

const PublicNavBar = () => {
  const [clinicName, setClinicName] = useState("");
  const [date, setDate] = useState(null);
  const [peopleNum, setPeopleNum] = useState(0);
  const [showFullClicked, setShowFullClicked] = useState(false);
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showUserDetailInputModal, setShowUserDetailInputModal] = useState(
    false
  );

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollOffsetY(position);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const hideUserDetailModal = () => {
    setShowUserDetailInputModal(false);
  };

  const handleModalsTransition = () => {
    setShowModal(false);
    setShowUserDetailInputModal(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollOffsetY > 0 ? "nav-wrapper-full nav-scrolled" : "nav-wrapper-full"
      }
    >
      {scrollOffsetY > 0 && !showFullClicked ? (
        <PartialNavBar
          user={user}
          isLoading={isLoading}
          logo={logo}
          setShowFullClicked={setShowFullClicked}
          handleShowModal={handleShowModal}
        />
      ) : (
        <FullNavBar
          user={user}
          isLoading={isLoading}
          scrollOffsetY={scrollOffsetY}
          logo={logo}
          setShowFullClicked={setShowFullClicked}
          handleShowModal={handleShowModal}
        />
      )}

      <LoginForm
        showModal={showModal}
        handleHideModal={handleHideModal}
        handleModalsTransition={handleModalsTransition}
        setShowModal={setShowModal}
        setShowUserDetailInputModal={setShowUserDetailInputModal}
      />

      <UserDetailInputForm
        showUserDetailInputModal={showUserDetailInputModal}
        hideUserDetailModal={hideUserDetailModal}
      />
    </div>
  );
};

export default PublicNavBar;
