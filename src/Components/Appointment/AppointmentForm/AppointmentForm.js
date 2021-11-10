import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./Appointment.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ closeModal, modalIsOpen, subject, date }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    data.type = subject;
    data.appointmentOn = date.toDateString();
    data.generated = new Date();
    fetch("http://localhost:5000/addappointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((success) => {
      if (success) {
        closeModal();
        alert("success");
      }
    });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 className="text-center" style={{ color: "#1cc7c1" }}>
          {subject}
        </h4>
        <p className="text-secondary text-center">
          <small>Confirm Booking On: {date.toDateString()}</small>
        </p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group p-2">
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Your Name"
              className="form-control"
            />
            {/* {errors.name && (
              <span className="text-danger">This field is required</span>
            )} */}
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              {...register("phone", { required: true, maxLength: 20 })}
              placeholder="Phone Number"
              className="form-control"
            />
            {/* {errors.phone && (
              <span className="text-danger">This field is required</span>
            )} */}
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
              className="form-control"
            />
            {/* {errors.email && (
              <span className="text-danger">This field is required</span>
            )} */}
          </div>
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                {...register("gender", { required: true, maxLength: 20 })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {/* {errors.gender && (
                <span className="text-danger">This field is required</span>
              )} */}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true, maxLength: 20 })}
                className="form-control"
                placeholder="Your Age"
                type="number"
              />
              {/* {errors.age && (
                <span className="text-danger">This field is required</span>
              )} */}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true, maxLength: 20 })}
                className="form-control"
                placeholder="Weight"
                type="number"
              />
              {/* {errors.weight && (
                <span className="text-danger">This field is required</span>
              )} */}
            </div>
          </div>

          <div className="form-group d-flex justify-content-center ">
            <button className="appoint-btn" type="submit">
              <strong> Confirm</strong>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
