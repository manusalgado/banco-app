import React from "react";
import "./Token.css";

class Token extends React.Component {
  render() {
    return (
      <div className="container--fluid">
        <div className="Token">
          <h3 className="Token__title">TOKEN</h3>
        </div>

        <div>
          <div className="Token-items">
            <div className="Token-icon">
              <img
                src="/img/iconToken1.jpg"
                alt="websitelogo"
                className="bd-placeholder-img Token-img"
              />
            </div>

            <div className="Token-son">
              <h5 className="mt-0 mb-1 Token-son__text">Ver en el inicio</h5>
            </div>

            <div className="switch">
              <input type="checkbox" id="Home" />
              <label className="slider round" for="Home"></label>
            </div>
          </div>

          <hr className="Token-line" />

          <div className="Token-items">
            <div className="Token-icon">
              <img
                src="/img/iconToken2.jpg"
                alt="websitelogo"
                className="bd-placeholder-img Token-img2"
              />
            </div>

            <div className="Token-son">
              <h5 className="mt-0 mb-1 Token-son__text">Restablecer</h5>
            </div>

            <div className="flecha">
              <img
                src="/img/arrow-right.svg"
                alt="websitelogo"
                className="bd-placeholder-img"
              />
            </div>
          </div>

          <hr className="Token-line" />
        </div>
      </div>
    );
  }
}

export default Token;
