import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="container--fluid">
      <div className="security-header">
        <div className="security-arrow">
          <Link to={props.route || "/"}>
            <img
              src="/img/arrow-left.svg"
              alt="websitelogo"
              className="bd-placeholder-img mr-3 security-icon"
            />
          </Link>
        </div>

        <div className="security-son">
          <h5 className="mt-0 mb-1 security-son__text">{props.title}</h5>
        </div>

        <div>
          <img className="bd-placeholder-img mr-3" />
        </div>
      </div>
    </div>
  );
}

export default Header;
