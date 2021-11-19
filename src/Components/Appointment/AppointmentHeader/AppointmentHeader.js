import React from "react";
import Chair from "../../../images/app-bg.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppoinmentHeader.css";
import nurse from "../../../images/nurse.jpg";
const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="apppointment_header_wrapper">
      <div className="appointment_header_title">
        <img src={nurse} alt="Snow" />
        <div className="centered">
          <h1>Schedule Your Appointment</h1>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center ">
        <div className="col-md-4 offset-md-1 calender">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-6 offset-md-1 appointment_img">
          <img src={Chair} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
