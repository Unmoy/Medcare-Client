import React, { useEffect, useState } from "react";
import Sidebar from "../../DashBoard/SideBar/SideBar";
import AppointmentDataTable from "../../DashBoard/AppointmentDataTable/AppointmentDataTable";
const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allPatient")
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
          style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
        >
          <h5 className="text-brand">All Patients</h5>
          <AppointmentDataTable appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
