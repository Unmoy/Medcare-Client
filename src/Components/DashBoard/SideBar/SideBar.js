import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faSignOutAlt,
  faGrinTears,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const SideBar = () => {
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
        <li>
          <Link to="/dashboard" className="text-white sidebar_route_links">
            <FontAwesomeIcon icon={faCalendar} className="sidebar_menu_icon" />{" "}
            <span>Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/allpatients" className="text-white sidebar_route_links">
            <FontAwesomeIcon icon={faUsers} className="sidebar_menu_icon" />
            <span>All Patients</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white sidebar_route_links">
            <FontAwesomeIcon icon={faFileAlt} className="sidebar_menu_icon" />
            <span>Prescriptions</span>
          </Link>
        </li>
        <li>
          <Link to="/addDoctor" className="text-white sidebar_route_links">
            <FontAwesomeIcon icon={faGrinTears} className="sidebar_menu_icon" />
            <span>Add Doctor</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white sidebar_route_links">
            <FontAwesomeIcon icon={faCog} className="sidebar_menu_icon" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white sidebar_route_links">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
