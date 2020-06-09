import React from "react";
import "./Cuenta.css";

class Cuenta extends React.Component {
  render() {
    return (
      <div className="container--fluid">
        <div className="account">
          <h3 className="account__title">TU CUENTA</h3>
        </div>

        <div>
          <div className="account-items">
            <div className="account-icon">
              <img src="/img/iconAccount1.jpg" alt="websitelogo" className="bd-placeholder-img account-img" />
            </div>

            <div className="account-son">
              <h5 className="mt-0 mb-1 account-son__text">Touch ID</h5>
            </div>

            <div className="switch">
              <input type="checkbox" id="Touch" />
              <label className="slider round" htmlFor="Touch"></label>
            </div>
          </div>

          <hr className="account-line" />

          <div className="account-items">
            <div className="account-icon">
              <img src="/img/iconAccount2.jpg" alt="websitelogo" className="bd-placeholder-img account-img2" />
            </div>

            <div className="account-son">
              <h5 className="mt-0 mb-1 account-son__text">
                Administración de dispositivos
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>

          <hr className="account-line" />

          <div className="account-items">
            <div className="account-icon">
              <img src="/img/iconAccount3.jpg" alt="websitelogo" className="bd-placeholder-img account-img3" />
            </div>

            <div className="account-son">
              <h5 className="mt-0 mb-1 account-son__text">
                Administración de Claves
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuenta;
