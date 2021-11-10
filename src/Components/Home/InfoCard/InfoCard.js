import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 info-card">
      <div
        className={`d-flex justify-content-center align-items-center info-container ${info.background}`}
      >
        <div className="font-icon">
          <FontAwesomeIcon
            className="info-icon"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div className="ms-1">
          <h4>{info.title}</h4>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
