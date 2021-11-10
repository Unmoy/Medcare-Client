import React from "react";

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div>
        <img
          style={{ height: "60px" }}
          className="mb-3"
          src={service.image}
          alt=""
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
