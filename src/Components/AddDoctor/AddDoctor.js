import React, { useState } from "react";
import Sidebar from "../DashBoard/SideBar/SideBar";
import axios from "axios";
const AddDoctor = () => {
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);
  const [btnState, setbtnState] = useState(true);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleImageUpload = (event) => {
    const uploadImage = new FormData();
    uploadImage.set("key", "00e062d52c84895195fcf7a9e35c76bf");
    uploadImage.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", uploadImage).then((res) => {
      setImage(res.data.data.display_url);
      console.log("Image uploaded");
      setbtnState(false);
    });
  };
  const handleSubmit = (e) => {
    const newDoctor = {
      name: info.name,
      email: info.email,
      imageUrl: image,
    };
    console.log("30", newDoctor);
    fetch("http://localhost:5000/adddoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDoctor),
    }).then((success) => {
      if (success) {
        alert("success");
      }
    });
    e.preventDefault();
  };

  return (
    <section className="container-fluid row dashboard_container">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add a Doctor</h5>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onBlur={handleBlur}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
              name="file"
            />
          </div>
          {btnState ? (
            <div>
              <button type="submit" className="btn btn-secondary disabled mt-3">
                Submit
              </button>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
