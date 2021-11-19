import React from "react";
// import img from "../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Doctor = ({ doc }) => {
  const { email, name, imageUrl } = doc;
  console.log(doc);

  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid mb-3" src={imageUrl} alt="" />
      <h4>{name}</h4>
      <p>
        <FontAwesomeIcon className="text-primary mx-2" icon={faPhoneAlt} />
        {email}
      </p>
    </div>
  );
};

export default Doctor;
