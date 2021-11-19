import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
// Static Data
const infos = [
  {
    id: 1,
    title: "Visiting Hours",
    description: "We are open 24/7",
    icon: faClock,
    background: "primary",
  },
  {
    id: 2,
    title: "Visit Our location",
    description: "Chittagong,Bangladesh-4000",
    icon: faMapMarker,
    background: "dark",
  },
  {
    id: 3,
    title: "Contact Us",
    description: "+0092 016789787",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infos.map((info) => (
          <InfoCard info={info} key={info.id}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
