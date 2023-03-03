import React from "react";
import "./Content.css";
import HOMEBODYIMG from "../Components/images/content.png";

function Content() {
  return (
    <div className="header__container">
      <div className="header__text">
        <h1>
          BumbleBee
          <br /> Buy first and pay later
        </h1>
      </div>
      <div className="header__image">
        <img src={HOMEBODYIMG} alt="" />{" "}
      </div>
    </div>
  );
}

export default Content;
