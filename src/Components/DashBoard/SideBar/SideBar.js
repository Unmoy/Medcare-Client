import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../Shared/contexts/AuthContext";

const SideBar = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
      localStorage.removeItem("token");
    } catch {
      alert("not logged out");
    }
  };
  useEffect(() => {
    fetch("https://nameless-ocean-19035.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: currentUser.user_email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white sidebar_route_links">
            <FontAwesomeIcon
              icon={faGripHorizontal}
              className="sidebar_menu_icon"
            />{" "}
            <span>Dashboard</span>
          </Link>
        </li>
        {isDoctor && (
          <div>
            <li>
              <Link to="/dashboard" className="text-white sidebar_route_links">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="sidebar_menu_icon"
                />{" "}
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link
                to="/allpatients"
                className="text-white sidebar_route_links"
              >
                <FontAwesomeIcon icon={faUsers} className="sidebar_menu_icon" />
                <span>All Patients</span>
              </Link>
            </li>
            <li>
              <Link
                to="/prescriptions"
                className="text-white sidebar_route_links"
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="sidebar_menu_icon"
                />
                <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white sidebar_route_links">
                <FontAwesomeIcon icon={faUser} className="sidebar_menu_icon" />
                <span>Add Doctor</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link className="text-white sidebar_route_links" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
