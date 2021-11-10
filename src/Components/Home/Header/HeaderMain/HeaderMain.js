import React from "react";
import Chair from "../../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h2 style={{ color: "#203047" }}>Your Health Matters</h2>
        <h4 style={{ color: "#203047" }}>So Are your Choices </h4>
        <p style={{ color: "#203047" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum
          fuga, soluta voluptatem molestiae ducimus?
        </p>
        <button className="header_button">Get Appointment</button>
      </div>
      <div className="col-md-6">
        <img src={Chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
