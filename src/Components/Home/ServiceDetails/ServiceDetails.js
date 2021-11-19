import React from "react";
import "./ServicDetails.css";
const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="service_box">
        <img
          style={{ height: "60px" }}
          className="mb-3"
          src={service.image}
          alt="service_image"
        />
        <h5>{service.name}</h5>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, fuga.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
