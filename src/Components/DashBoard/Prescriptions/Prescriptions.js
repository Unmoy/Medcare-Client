import React from "react";
import AppointmentDataTable from "../../AllPatients/AllPatients/AppointmentDataTable/AppointmentDataTable";
import SideBar from "../SideBar/SideBar";

const Prescriptions = () => {
  return (
    <div>
      <div className="container-fluid dashboard_container">
        <div className="row">
          <SideBar></SideBar>
          <div
            className="col-md-10 p-4 pr-5 prescriptions_container"
            style={{ position: "absolute", right: 0 }}
          >
            <h4>No Prescritions added yet</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
