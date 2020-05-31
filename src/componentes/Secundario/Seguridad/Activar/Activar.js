import React from "react";
import Header from "../Header/Header";
import "./Activar.css";

class Activar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountState: true,
    };
  }

  render() {
    return (
      <div className="container--fluid">
        <Header title="Activar Banda" route="/Seguridad"></Header>
        <div>
          <div className="account-items">
            <div className="account-son">
              <h5 className="mt-0 mb-1 account-son__text">
                {this.state.accountState && "Desactivar"}
                {!this.state.accountState && "Activar"}
              </h5>
            </div>

            <div className="switch">
              <input
                checked={this.state.accountState}
                onChange={(event) => {
                  this.setState({
                    accountState: event.target.checked,
                  });
                }}
                type="checkbox"
                id="Touch"
              />
              <label className="slider round" for="Touch"></label>
            </div>
          </div>

          <div className="active-message">
            {!this.state.accountState &&
              "Su cuenta #043359801 se encuentra bloqueada por seguridad"}
          </div>

          <div>
            <div className="active-title">
              <h3 className="active-title__son">BLOQUEOS TEMPORALES</h3>
            </div>

            <div
              className="accordion md-accordion"
              id="accordionEx1"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div class="card-header" role="tab" id="headingTwo1">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx1"
                    href="#collapseTwo1"
                    aria-expanded="false"
                    aria-controls="collapseTwo1"
                  >
                    <h5 class="mb-0 son-title">Bloqueo por Mora </h5>
                  </a>
                </div>

                <div
                  id="collapseTwo1"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo1"
                  data-parent="#accordionEx1"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo se asigna si presentas mora mayor a 30
                        días.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Debes realizar el pago mínimo de la deuda más los
                        intereses causados y al dia siguiente se levanta este
                        bloqueo.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingTwo2">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx1"
                    href="#collapseTwo21"
                    aria-expanded="false"
                    aria-controls="collapseTwo21"
                  >
                    <h5 className="mb-0 son-title">Preventivo por Oficina </h5>
                  </a>
                </div>

                <div
                  id="collapseTwo21"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo21"
                  data-parent="#accordionEx1"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo es asignado cuando presentas moras por
                        otras carteras con el Banco o cuando nos informas de un
                        extravió temporal de tu tarjeta.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo se levanta cuando quedas al día en los
                        creditos atrasados o recuperes la tarjeta, debes
                        comunicarte a tu oficina de radicación.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingThree31">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx1"
                    href="#collapseThree31"
                    aria-expanded="false"
                    aria-controls="collapseThree31"
                  >
                    <h5 className="mb-0 son-title">Preventivo Credibanco </h5>
                  </a>
                </div>

                <div
                  id="collapseThree31"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree31"
                  data-parent="#accordionEx1"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Es asignado cuando una de tus tarjetas de crédito
                        presenta mora. Este bloque es asignado por la Gerencia
                        Nacional de Cobranzas.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Se levanta automáticamente al día siguiente de haber
                        realizado la cancelacion del valor pendiente de pago.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingThree311">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx1"
                    href="#collapseThree311"
                    aria-expanded="false"
                    aria-controls="collapseThree311"
                  >
                    <h5 className="mb-0 son-title">PIN Errado</h5>
                  </a>
                </div>

                <div
                  id="collapseThree311"
                  className="collapse active-link"
                  role="tabpanel"
                  aria-labelledby="headingThree311"
                  data-parent="#accordionEx1"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Este bloque es asignado automáticamente cuando ingresas
                        erradamente la clave de tu tarjeta tres veces.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Debes solicitar el desbloqueo en tu oficina de
                        radicación.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="active-title">
              <h3 className="active-title__son">BLOQUEOS DEFINITIVOS</h3>
            </div>

            <div
              className="accordion md-accordion"
              id="accordionEx11"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo11">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx11"
                    href="#collapseTwo11"
                    aria-expanded="false"
                    aria-controls="collapseTwo11"
                  >
                    <h5 className="mb-0 son-title">Cancelacion por Mora </h5>
                  </a>
                </div>

                <div
                  id="collapseTwo11"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo11"
                  data-parent="#accordionEx11"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Es asignado automáticamente por el Banco, en el momento
                        en que tu tarjeta cumpla una mora mayor a 240 dias.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo no se levanta por haber llegado al máximo
                        de mora permitido por el Banco.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingTwo22">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx11"
                    href="#collapseTwo22"
                    aria-expanded="false"
                    aria-controls="collapseTwo22"
                  >
                    <h5 className="mb-0 son-title">Robo o Extravio </h5>
                  </a>
                </div>

                <div
                  id="collapseTwo22"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo22"
                  data-parent="#accordionEx11"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Lo puedes realizar en las oficinas del Banco o a través
                        de la servilinea de tu ciudad, en los siguientes casos:
                        Robo de la tarjeta, Extravio de la tarjeta.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo no se puede levantar. Automáticamente se
                        asigna un nuevo numero de tarjeta, el cual es enviado a
                        tu oficina de radicación para ser retirada.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingThree33">
                  <a
                    className="collapsed active-link"
                    data-toggle="collapse"
                    data-parent="#accordionEx11"
                    href="#collapseThree33"
                    aria-expanded="false"
                    aria-controls="collapseThree33"
                  >
                    <h5 className="mb-0 son-title">Fraude</h5>
                  </a>
                </div>

                <div
                  id="collapseThree33"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree33"
                  data-parent="#accordionEx11"
                >
                  <div className="card-body">
                    <h5 className="body-title">Como se asigna</h5>
                    <ul className="body-list">
                      <li>
                        Se realiza cuando tu tarjeta presenta transacciones que
                        no has realizado. Este bloqueo es asignado por tu
                        Oficinas o llamando a traves de la servilinea a
                        solicitud tuya.
                      </li>
                    </ul>

                    <h5 className="body-title">Como se Desbloquea</h5>
                    <ul className="body-list">
                      <li>
                        Este bloqueo no se puede levantar. automáticamente se
                        asigna un nuevo numero de tarjeta, el cual es enviado a
                        tu oficina de radicacion para ser retirada.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activar;
