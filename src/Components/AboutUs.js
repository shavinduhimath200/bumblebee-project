import React from "react";
import "./AboutUs.css";
import LOGO from "../Components/images/logo.png";

function AboutUsBody() {
  return (
    <div className="AboutUs__Container">
      <div className="AboutUs__partOne">
        {/* about text section */}
        <div className="PartOne">
          <h2>About Us</h2>
          <p>
            Welcome to Bumblebee, a revolutionary loan offering website that allows customers to buy
            their desired products and pay for them later. Our mission is to make shopping accessible
            to everyone, regardless of their financial situation. We believe that everyone deserves the
            opportunity to own the things they want, without having to worry about upfront costs.
            At Bumblebee, we understand the challenges that many people face when trying to purchase
            the things they need and want. That's why we offer flexible payment options that allow our
            customers to spread their payments over time, without accruing any interest or hidden fees.
            Our team is committed to providing our customers with the highest level of service and support.
            We work hard to ensure that every customer is satisfied with their experience at Bumblebee. 
            From our easy-to-use website to our friendly customer service team, we are here to help you 
            every step of the way.
          </p>
        </div>
      </div>
      <div className="AboutUs__partTwo">
        {/* logo section */}
        <div className="PartTwo">
          <img
            src={LOGO}
            alt=""
            width="500"
            height="500"
            style={{
              marginRight: "10px",
              borderRadius: "250px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
