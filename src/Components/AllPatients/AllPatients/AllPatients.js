import React, { useEffect, useState } from "react";
import Sidebar from "../../DashBoard/SideBar/SideBar";
import AppointmentDataTable from "./AppointmentDataTable/AppointmentDataTable";
const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://nameless-ocean-19035.herokuapp.com/allPatient")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, []);

  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <Sidebar></Sidebar>
        <div
          className="col-md-10 p-4 pr-5"
          style={{ position: "absolute", right: 0 }}
        >
          <h2 className="allPatient_container">All Patients</h2>
          <AppointmentDataTable appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
