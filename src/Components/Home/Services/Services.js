import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/teeth.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const servicesData = [
  {
    name: "Fluoride Treatment",
    description: "dummy text ",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    description: "",
    image: cavity,
  },
  {
    name: "Teeth Whitening",
    description: "",
    image: teeth,
  },
];

const Services = () => {
  return (
    <section>
      <div className="text-center mt-5">
        <h5 style={{ color: "#1cc7c1" }}>
          <strong>OUR SERVICES</strong>
        </h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
          {servicesData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
