import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://nameless-ocean-19035.herokuapp.com/getdoctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  return (
    <section className="doctors" id="doctors">
      <div className="container">
        <div>
          <h5 className="text-center text-primary mb-2">Our Doctors</h5>
          <h2 className="text-center">
            See what our Medical Experts can do for you
          </h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row mt-5">
            {doctors.map((doc) => (
              <Doctor key={doc._id} doc={doc}></Doctor>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
