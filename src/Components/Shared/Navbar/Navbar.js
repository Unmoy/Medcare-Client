import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const { currentUser } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
      localStorage.removeItem("token");
    } catch {
      alert("not logged out");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg header_nav">
      <div className="container-fluid">
        <Link
          class="navbar-brand"
          style={{
            fontFamily: "Cookie",
            fontSize: "30px",
            color: "#09e5ab",
            fontWeight: "600",
          }}
          to="/"
        >
          MEDCARE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav_menu_wrapper"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav_menu_container">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#doctors">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav_menu_right">
            <li className="nav-item">
              <div className="nav_contact">
                <FontAwesomeIcon
                  className="clinic_icon"
                  icon={faClinicMedical}
                />
              </div>
              <div className="navbar_contact_details">
                <p>Contact</p>
                <p className="contact_info">+1 315 369 5943</p>
              </div>
            </li>
            <li className="nav-item">
              {currentUser.user_email ? (
                <button className="navbar_login">
                  {currentUser.user_name}
                </button>
              ) : (
                <Link to="/login" className="route_links">
                  <button className="navbar_login">login / signup</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
