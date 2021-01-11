import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import InformationPage from "../pages/InformationPage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailPage from "../pages/DetailPage";
import BookingDetailPage from "../pages/BookingDetailPage";
import BookingConfirm from "../pages/BookingConfirm";
import PrivateRoute from "./PrivateRoute";
import "../App.css";
import SearchListPage from "../pages/SearchListPage";
const PublicLayout = () => {
  return (
    <>
      <div className="Nav-Bar">
        <PublicNavbar />
      </div>

      <Switch>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/info" component={InformationPage} />
            <Route exact path="/detail/:id" component={DetailPage} />
            <Route exact path="/search" component={SearchListPage} />

            <PrivateRoute
              exact
              path="/booking/:id"
              component={BookingDetailPage}
            />
            <PrivateRoute
              exact
              path="/booking/confirm/:id"
              component={BookingConfirm}
            />
            <Route exact component={NotFoundPage} />
          </Switch>
        </Container>
      </Switch>
    </>
  );
};

export default PublicLayout;
