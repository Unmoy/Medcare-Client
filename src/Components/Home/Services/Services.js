import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/teeth.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import "./Services.css";
const servicesData = [
  {
    id: 1,
    name: "Fluoride Treatment",
    description: "dummy text ",
    image: fluoride,
  },
  {
    id: 2,
    name: "Cavity Filling",
    description: "",
    image: cavity,
  },
  {
    id: 3,
    name: "Teeth Whitening",
    description: "",
    image: teeth,
  },
];

const Services = () => {
  return (
    <section>
      <div className="services_wrapper" id="service">
        <h2>What are you looking for?</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
          {servicesData.map((service) => (
            <ServiceDetails service={service} key={service.id}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
