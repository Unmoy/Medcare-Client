import React from "react";
import "./AppointmentShortList.css";
const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.name}</td>
            <td>{appointment.phone}</td>
            <td>{appointment.patient_email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentShortList;
