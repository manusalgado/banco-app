import React from "react";
import Header from "../Header/Header";
import "./Ahorro.css";

class Ahorro extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: ['Su cuenta ha sido activada', 'Hubo un error',],
      selectedNote: null,
      clicked: false
    }
  }
   onPressButton = () => {
    let messages = []
    messages[0] = `Su cuenta ha sido activada`
    messages[1] = `ERROR. información errada,  acércate a la oficina más cercana para actualizar tus datos o comunicate al 3820000`
    let nro = Math.floor(Math.random() * (messages.length - 0) + 0);
    alert(messages[nro])
    console.log(messages[0])
    
    
  }


  render() {
    return (
    <div className="container--fluid">
        <Header title="Cuenta de ahorro" route="/Seguridad"></Header>
        <div className="saving">
          <h3 className="saving__title">
            ¿ Que productos tiene actualmente en el sistema financiero ?
          </h3>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox"  value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Crédito libre destino</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Tarjeta de crédito</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Cuenta de ahorros/corriente </p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Todas las anteriores</p>
        </div>

        <div className="saving">
          <h3 className="saving__title">
            ¿ Cual es su número de celular registrado como dato seguro ?
          </h3>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text"> *****2116</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">****2927</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">*****1567</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text"> *****2167</p>
        </div>

        <div className="saving">
          <h3 className="saving__title">
            ¿ Usted tiene cuenta corriente en xxxx ?
          </h3>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Si</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">No</p>
        </div>

        <div className="saving">
          <h3 className="saving__title">¿ Cual es su año de nacimiento ?</h3>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">1992</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">1987</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">1967</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">1975</p>
        </div>

        <div className="saving">
          <h3 className="saving__title">
            ¿ Cual es su dirección de Residencia ?
          </h3>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Calle 50 n 21-51</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Carrera 12 n 87 -51</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Diagonal 24 sur n 15-23</p>
        </div>

        <div className="form-check saving-items">
          <input className="form-check-input saving-items__input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label saving-items__label" htmlFor="defaultCheck1" />
          <p className="saving-items__text">Avenida Chile # 13-54</p>
        </div>

        <div className="saving-button">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          <button
            className="btn btn-primary btn-block saving-button-son" 
            onClick={this.onPressButton}> ENVIAR
          </button>
        </div>
      </div>
    );
  }
}
export default Ahorro;
