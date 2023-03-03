import React from "react";
import "./Footer.css";
import FOOTERIMG from "../Components/images/logo.png";
import FCEBOOKIMG from "../Components/images/facebook.png";
import TWITTERIMG from "../Components/images/twitter.png";
import INSTAGRAMIMG from "../Components/images/instagram.png";
import LINKEDINIMG from "../Components/images/linkedin.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footeritems">
        {/* logo image */}
        <img
          src={FOOTERIMG}
          alt=""
          width="150"
          height="150"
          style={{
            marginTop: "20px",
            marginLeft: "15px",
            borderRadius: "75px",
          }}
        />
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy & Terms</p>
        <div className="footer__socialmedia">
          <h3>Follow Us</h3>
          {/* social media icons */}
          <img
            src={FCEBOOKIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
              cursor: "pointer",
            }}
          />
          <img
            src={TWITTERIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
              cursor: "pointer",
            }}
          />
          <img
            src={INSTAGRAMIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
              cursor: "pointer",
            }}
          />
          <img
            src={LINKEDINIMG}
            alt=""
            width="50"
            height="50"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      {/* footer copyright section */}
      <div className="footer__copyright">
        <p>Copyright 2023 BUMBLEBEE All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
