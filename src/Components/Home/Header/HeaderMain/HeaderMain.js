import React from "react";
import { Link } from "react-router-dom";
import Chair from "../../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className="header_section">
      <div className="container_fluid">
        <div className="banner_wrapper">
          <div className="banner_text text-center">
            <h1>Search Doctor, Make an Appointment</h1>
            <p>
              Discover the best doctors, clinic & hospital the city nearest to
              you.
            </p>
            <button>
              <Link to="/appointment" className="route_links">
                Book an Appointment
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
