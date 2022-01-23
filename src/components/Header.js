import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  return (

    /* Carousel Section */
    <section style={{ marginTop: "10rem" }}>
      <Carousel className="stylingcs">
        <Carousel.Item>

      /* Carousel Section */
  <section>
  <Carousel className="stylingcs" interval={1000} variant="dark">
        <Carousel.Item >
          

          <div className="carouselcs">
            <h2>
              I no longer have to look around for help. I've found the best
              place where i could make a change.
            </h2>
          </div>

          <div>
            <img
              className="dogcs"
              alt="First slide"
              src="./images/dog-img.jpg"
            />
            <em>Tommy, India</em>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselcs">
            <h2>
              I am so happy to be associated with the community and help
              animals.It is indeed a pleasure for me .
            </h2>
          </div>

          <div>
            <img
              className="dogcs"
              alt="First slide"
              src="./images/lady-img.jpg"
            />
            <em>User, India</em>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselcs">
            <h2>
              I am so happy to be associated with the community and help
              animals.It is indeed a pleasure for me .
            </h2>
          </div>

          <div>
            <img
              className="dogcs"
              alt="First slide"
              src="./images/lady-img.jpg"
            />
            <em>User, India</em>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Header;
