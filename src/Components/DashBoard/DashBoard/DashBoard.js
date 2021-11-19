import React from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import SideBar from "../SideBar/SideBar";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import { useAuth } from "../../Shared/contexts/AuthContext";
import { useHistory } from "react-router";

const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const history = useHistory();
  const { currentUser } = useAuth();
  const patient_email = currentUser.user_email;
  console.log(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: selectedDate,
        email: patient_email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setAppointments(result);
        console.log(result);
      });
  }, [selectedDate]);

  return (
    <main className="container-fluid dashboard_container">
      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        <div className="mt-5 d-flex justify-content-evenly col-md-10">
          <div className="col-md-5 calender">
            <Calendar onChange={handleDateChange} />
          </div>
          <div className="col-md-5">
            <AppointmentByDate
              key={appointments._id}
              appointments={appointments}
            ></AppointmentByDate>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
