import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container--fluid">
        <div className="header">
          <div className="header-icon">
            <img src="/img/iconHome1.jpg" alt="websitelogo" className="bd-placeholder-img header-icon__son" />
          </div>

          <div className="header-son">
            <h5 className="mt-0 mb-1 header-son__text">Hola Elen</h5>
          </div>

          <div className="header-keys">
            <img src="/img/iconHome2.jpg" alt="websitelogo" className="bd-placeholder-img header-keys__icon" />
          </div>
        </div>

        <div className="plus-items">
          <div className="plus-son">
            <h5 className="mt-0 mb-1 plus-son__text">
              Abre más productos aqui
            </h5>
            <i className="fas fa-plus-circle plus-son__icon "></i>
          </div>
        </div>

        <hr className="header-line" />

        <div className="savings-items">
          <div className="savings-son">
            <h5 className="savings-son__title">
              Cuenta de Ahorros N 008568156
            </h5>
            <span className="savings-son__span">Saldo Disponible</span>
            <p className="savings-son__text">$152</p>
          </div>
        </div>

        <hr className="header-line" />

        <div className="savings-items">
          <div className="savings-son">
            <h5 className="savings-son__title">
              Cuenta de Ahorros N 043359801
            </h5>
            <span className="savings-son__span">Saldo Disponible</span>
            <p className="savings-son__text">$197.150</p>
          </div>
        </div>

        <hr className="header-line" />

        <div className="savings-items">
          <div className="savings-son">
            <h5 className="savings-son__title">
              Tarjeta de credito Visa N 7526
            </h5>
            <span className="savings-son__span">Cupo Compras</span>
            <p className="savings-son__text">$327.164</p>
          </div>
        </div>

        <hr className="header-line" />
      </div>
    );
  }
}

export default Header;
