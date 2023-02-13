import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel2.css";

const Carousel2 = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="c2"><img className="d-block w-100" src="NavCarousal.jpeg" alt="" /></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="c2"><img className="d-block w-100" src="NavCarousal.jpeg" alt="" /></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="c2"><img className="d-block w-100" src="NavCarousal.jpeg" alt="" /></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
