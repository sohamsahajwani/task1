import React from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Carousel3.css"

const Carousel3 = () => {
  return (
    <div className="c3">
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img src="1.jpeg" />
        <img src="4.jpeg" />
        <img src="5.jpeg" />
      </Carousel>
    </div>
  );
};

export default Carousel3;
