import React from "react";
import "./AppointmentDataTable.css";
const AppointmentDataTable = ({ appointments }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{appointment.name}</td>
            <td>{appointment.gender}</td>
            <td>{appointment.age}</td>
            <td>{appointment.weight}KG</td>
            <td>{appointment.phone}</td>
            <td>{appointment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
