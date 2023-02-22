import React from "react";
import image1 from "../Image/dashboard.jpg";
import image2 from "../Image/image.jpg";
import image3 from "../Image/picture.jpg";
import "./Dashboard.css";

import Carousel from "react-bootstrap/Carousel";

const DashBoard = () => {
  return (
    <div>
      <div className="header">
        Academic websites are built for educational institutions or related
        academic organizations to provide information about the education,
        learning opportunities, and courses they offer. It also can have
        features like admissions, eLearning, and faculty pages to engage with
        online visitors and potential students.
      </div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 h-75" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 h-75" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-75" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default DashBoard;
