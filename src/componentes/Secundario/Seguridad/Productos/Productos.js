import React from "react";
import "./Productos.css";
import { Link } from "react-router-dom";

class Productos extends React.Component {
  render() {
    return (
      <div className="container--fluid">
        <div className="products">
          <h3 className="products__title">TUS PRODUCTOS</h3>
        </div>
        <div>
          <div className="products-items">
            <div>
              <img src="/img/iconProducts1.jpg" alt="websitelogo" className="bd-placeholder-img products-icon" />
            </div>

            <div className="products-son">
              <h5 className="mt-0 mb-1 products-son__text">
                Bloqueo de Tarjeta Debito
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>

          <hr className="products-line" />

          <div className="products-items">
            <div>
              <img src="/img/iconProducts2.jpg" alt="websitelogo" className="bd-placeholder-img products-icon2" />
            </div>

            <div className="products-son">
              <h5 className="mt-0 mb-1 products-son__text">
                Activación de Tarjetas
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>

          <hr className="products-line" />


          <Link to="/activar">
          <div className="products-items">
            <div>
              <img src="/img/iconProducts1.jpg" alt="websitelogo" className="bd-placeholder-img products-icon" />
            </div>

            <div className="products-son">
              <h5 className="mt-0 mb-1 products-son__text">
                Activar banda
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>
          </Link>

          <hr className="products-line" />


          <Link to="/ahorro">
          <div className="products-items">
            <div>
              <img src="/img/iconProducts1.jpg" alt="websitelogo" className="bd-placeholder-img products-icon" />
            </div>

            <div className="products-son">
              <h5 className="mt-0 mb-1 products-son__text">
                Activar cuenta de ahorro
              </h5>
            </div>

            <div className="flecha">
              <img src="/img/arrow-right.svg" alt="websitelogo" className="bd-placeholder-img" />
            </div>
          </div>
          </Link>

          <hr className="products-line" />
        </div>
      </div>
    );
  }
}

export default Productos;
