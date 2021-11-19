import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "Washington",
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "Los Angelos",
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "Newyork",
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <div className="test_wrapper" id="reviews">
      <div>
        <div className="section-header">
          <h5 className="text-primary text-uppercase">Testimonial</h5>
          <h1>
            What Our Patients <br /> Says
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row mt-5">
            {testimonialData.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
