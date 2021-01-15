import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import InformationPage from "../pages/InformationPage";
import NotFoundPage from "../pages/NotFoundPage";
import ClinicDetailPage from "../pages/ClinicDetailPage";
import BookingDetailPage from "../pages/BookingDetailPage";
import BookingConfirm from "../pages/BookingConfirm";
import PrivateRoute from "./PrivateRoute";
// import SearchListPage from "../pages/SearchListPage";
import AdminPage from "../pages/Admin/AdminPage";
import Footer from "../components/Footer";
// import "../style/main.css";
import { Container } from "react-bootstrap";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container style={{ padding: 0 }} fluid>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/info" component={InformationPage} />
          <Route exact path="/clinic/:id" component={ClinicDetailPage} />
          {/* <Route exac path="/search" component={SearchListPage} /> */}
          <PrivateRoute exact path="/login/clinic" component={LoginPage} />
          <PrivateRoute exact path="/admin/clinic/" component={AdminPage} />
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
      <Footer />
    </>
  );
};

export default PublicLayout;
